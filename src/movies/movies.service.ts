import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
const moviesData = require('./data/movies.json');

// Definición del tipo MovieData para los datos de las películas
type MovieData = {
  title: string;
  year: string; // año es una cadena, luego lo convertimos a número
  genres: string[];
  ratings: number[]; // Asegúrate de que ratings sea un array de números
  viewerCount: number;
  storyline: string;
  actors: string[];
  duration: string; // duración es una cadena, la convertimos a número
  releaseDate: string;
  contentRating: string;
  posterImage: string;
};

@Injectable()
export class MoviesService {
  private movies: Movie[];

  constructor() {
    // Mapeo y transformación de los datos del archivo JSON a la estructura correcta
    this.movies = (moviesData as MovieData[]).map(movie => ({
      title: movie.title,
      year: parseInt(movie.year, 10), // convertimos el año a número
      genres: movie.genres,
      imdbRating: movie.ratings[0], // asumimos que ratings ya es un número
      viewerCount: movie.viewerCount, // mantén este como número
      cast: movie.actors, // cast como array de actores
      duration: parseInt(movie.duration, 10), // convertimos la duración a número
    })) as Movie[];
  }

  addMovie(movie: Movie): Movie {
    this.movies.push(movie);
    return movie;
  }

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getMoviesByPopularity(): Movie[] {
    return this.movies.sort((a, b) => this.calculatePopularity(b) - this.calculatePopularity(a));
  }

  getMoviesByGenre(genre: string): Movie[] {
    return this.movies
      .filter(movie => movie.genres.includes(genre))
      .sort((a, b) => this.calculatePopularity(b) - this.calculatePopularity(a));
  }

  getMoviesByYear(order: 'asc' | 'desc' = 'desc'): Movie[] {
    return this.movies.sort((a, b) => order === 'desc' ? b.year - a.year : a.year - b.year);
  }

  getMoviesByDuration(order: 'asc' | 'desc' = 'desc'): Movie[] {
    return this.movies.sort((a, b) => order === 'desc' ? b.duration - a.duration : a.duration - b.duration);
  }

  getMoviesByActor(actor: string): Movie[] {
    return this.movies
      .filter(movie => movie.cast.includes(actor))
      .sort((a, b) => this.calculatePopularity(b) - this.calculatePopularity(a));
  }

  private calculatePopularity(movie: Movie): number {
    return (movie.imdbRating * 0.6) + (movie.viewerCount * 0.3) + (movie.year * 0.1);
  }
}
