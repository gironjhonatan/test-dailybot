"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovieDto = void 0;
class CreateMovieDto {
    constructor() {
        this.title = '';
        this.year = 0;
        this.genres = [];
        this.duration = 0;
        this.imdbRating = 0;
        this.viewerCount = 0;
        this.cast = [];
        this.posterImage = '';
    }
}
exports.CreateMovieDto = CreateMovieDto;
