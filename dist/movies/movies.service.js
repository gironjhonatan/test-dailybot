"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const moviesData = require('./data/movies.json');
let MoviesService = class MoviesService {
    constructor() {
        // Mapeo y transformación de los datos del archivo JSON a la estructura correcta
        this.movies = moviesData.map(movie => ({
            title: movie.title,
            year: parseInt(movie.year, 10), // convertimos el año a número
            genres: movie.genres,
            imdbRating: movie.ratings[0], // asumimos que ratings ya es un número
            viewerCount: movie.viewerCount, // mantén este como número
            cast: movie.actors, // cast como array de actores
            duration: parseInt(movie.duration, 10), // convertimos la duración a número
        }));
    }
    addMovie(movie) {
        this.movies.push(movie);
        return movie;
    }
    getAllMovies() {
        return this.movies;
    }
    getMoviesByPopularity() {
        return this.movies.sort((a, b) => this.calculatePopularity(b) - this.calculatePopularity(a));
    }
    getMoviesByGenre(genre) {
        return this.movies
            .filter(movie => movie.genres.includes(genre))
            .sort((a, b) => this.calculatePopularity(b) - this.calculatePopularity(a));
    }
    getMoviesByYear(order = 'desc') {
        return this.movies.sort((a, b) => order === 'desc' ? b.year - a.year : a.year - b.year);
    }
    getMoviesByDuration(order = 'desc') {
        return this.movies.sort((a, b) => order === 'desc' ? b.duration - a.duration : a.duration - b.duration);
    }
    getMoviesByActor(actor) {
        return this.movies
            .filter(movie => movie.cast.includes(actor))
            .sort((a, b) => this.calculatePopularity(b) - this.calculatePopularity(a));
    }
    calculatePopularity(movie) {
        return (movie.imdbRating * 0.6) + (movie.viewerCount * 0.3) + (movie.year * 0.1);
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MoviesService);
