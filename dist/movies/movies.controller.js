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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const movies_service_1 = require("./movies.service");
const create_movie_dto_1 = require("./dto/create-movie.dto");
const movie_entity_1 = require("./entities/movie.entity");
let MoviesController = class MoviesController {
    constructor(moviesService) {
        this.moviesService = moviesService;
    }
    addMovie(createMovieDto) {
        return this.moviesService.addMovie(createMovieDto);
    }
    getMovies() {
        return this.moviesService.getAllMovies();
    }
    getMoviesByPopularity() {
        return this.moviesService.getMoviesByPopularity();
    }
    getMoviesByGenre(genre) {
        return this.moviesService.getMoviesByGenre(genre);
    }
    getMoviesByYear(order = 'desc') {
        return this.moviesService.getMoviesByYear(order);
    }
    getMoviesByDuration(order = 'desc') {
        return this.moviesService.getMoviesByDuration(order);
    }
    getMoviesByActor(actor) {
        return this.moviesService.getMoviesByActor(actor);
    }
};
exports.MoviesController = MoviesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add a new movie' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The movie has been successfully created.', type: movie_entity_1.Movie }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_dto_1.CreateMovieDto]),
    __metadata("design:returntype", movie_entity_1.Movie)
], MoviesController.prototype, "addMovie", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all movies' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of movies.', type: [movie_entity_1.Movie] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], MoviesController.prototype, "getMovies", null);
__decorate([
    (0, common_1.Get)('popularity'),
    (0, swagger_1.ApiOperation)({ summary: 'Get movies by popularity' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of movies ordered by popularity.', type: [movie_entity_1.Movie] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], MoviesController.prototype, "getMoviesByPopularity", null);
__decorate([
    (0, common_1.Get)('genre'),
    (0, swagger_1.ApiOperation)({ summary: 'Get movies by genre' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of movies filtered by genre.', type: [movie_entity_1.Movie] }),
    __param(0, (0, common_1.Query)('genre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], MoviesController.prototype, "getMoviesByGenre", null);
__decorate([
    (0, common_1.Get)('year'),
    (0, swagger_1.ApiOperation)({ summary: 'Get movies by year' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of movies sorted by year.', type: [movie_entity_1.Movie] }),
    __param(0, (0, common_1.Query)('order')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], MoviesController.prototype, "getMoviesByYear", null);
__decorate([
    (0, common_1.Get)('duration'),
    (0, swagger_1.ApiOperation)({ summary: 'Get movies by duration' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of movies sorted by duration.', type: [movie_entity_1.Movie] }),
    __param(0, (0, common_1.Query)('order')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], MoviesController.prototype, "getMoviesByDuration", null);
__decorate([
    (0, common_1.Get)('actor'),
    (0, swagger_1.ApiOperation)({ summary: 'Get movies by actor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of movies featuring a specific actor.', type: [movie_entity_1.Movie] }),
    __param(0, (0, common_1.Query)('actor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], MoviesController.prototype, "getMoviesByActor", null);
exports.MoviesController = MoviesController = __decorate([
    (0, swagger_1.ApiTags)('movies'),
    (0, common_1.Controller)('movies'),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], MoviesController);
