"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    constructor() {
        this.title = ''; // Inicialización con un valor por defecto
        this.year = 0; // Otro ejemplo de inicialización
        this.genres = [];
        this.duration = 0;
        this.imdbRating = 0;
        this.viewerCount = 0;
        this.cast = [];
    }
}
exports.Movie = Movie;
