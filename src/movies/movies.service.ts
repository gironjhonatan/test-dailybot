import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
const moviesData = require('./data/movies.json');

type MovieData = {
  title: string;
  year: string; 
  genres: string[];
  ratings: number[]; 
  viewerCount: number;
  storyline: string;
  actors: string[];
  duration: string; 
  releaseDate: string;
  contentRating: string;
  posterImage: string;
};

@Injectable()
export class MoviesService {
  private movies: Movie[];

  constructor() {
    this.movies = (moviesData as MovieData[]).map(movie => ({
      title: movie.title,
      year: parseInt(movie.year, 10), 
      genres: movie.genres,
      imdbRating: movie.ratings[0], 
      viewerCount: movie.viewerCount, 
      cast: movie.actors, 
      duration: parseInt(movie.duration, 10), 
    })) as Movie[];
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

  getMoviesSimilarTo(movie: Movie): Movie[] {
    return this.movies
      .filter(m => 
        m !== movie && 
        (m.genres.some(genre => movie.genres.includes(genre)) || 
         m.cast.some(actor => movie.cast.includes(actor)))
      )
      .sort((a, b) => {
        const genreMatchA = a.genres.filter(genre => movie.genres.includes(genre)).length;
        const genreMatchB = b.genres.filter(genre => movie.genres.includes(genre)).length;

        if (genreMatchA !== genreMatchB) {
          return genreMatchB - genreMatchA; 
        }
        const actorMatchA = a.cast.filter(actor => movie.cast.includes(actor)).length;
        const actorMatchB = b.cast.filter(actor => movie.cast.includes(actor)).length;

        if (actorMatchA !== actorMatchB) {
          return actorMatchB - actorMatchA; 
        }

        return this.calculatePopularity(b) - this.calculatePopularity(a);
      });
  }

  private calculatePopularity(movie: Movie): number {
    return (movie.imdbRating * 0.6) + (movie.viewerCount * 0.3) + (movie.year * 0.1);
  }
}
