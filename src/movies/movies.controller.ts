import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiOperation({ summary: 'Add a new movie' })
  @ApiResponse({ status: 201, description: 'The movie has been successfully created.', type: Movie })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  addMovie(@Body() createMovieDto: CreateMovieDto): Movie {
    return this.moviesService.addMovie(createMovieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movies' })
  @ApiResponse({ status: 200, description: 'List of movies.', type: [Movie] })
  getMovies(): Movie[] {
    return this.moviesService.getAllMovies();
  }

  @Get('popularity')
  @ApiOperation({ summary: 'Get movies by popularity' })
  @ApiResponse({ status: 200, description: 'List of movies ordered by popularity.', type: [Movie] })
  getMoviesByPopularity(): Movie[] {
    return this.moviesService.getMoviesByPopularity();
  }

  @Get('genre')
  @ApiOperation({ summary: 'Get movies by genre' })
  @ApiResponse({ status: 200, description: 'List of movies filtered by genre.', type: [Movie] })
  getMoviesByGenre(@Query('genre') genre: string): Movie[] {
    return this.moviesService.getMoviesByGenre(genre);
  }

  @Get('year')
  @ApiOperation({ summary: 'Get movies by year' })
  @ApiResponse({ status: 200, description: 'List of movies sorted by year.', type: [Movie] })
  getMoviesByYear(@Query('order') order: 'asc' | 'desc' = 'desc'): Movie[] {
    return this.moviesService.getMoviesByYear(order);
  }

  @Get('duration')
  @ApiOperation({ summary: 'Get movies by duration' })
  @ApiResponse({ status: 200, description: 'List of movies sorted by duration.', type: [Movie] })
  getMoviesByDuration(@Query('order') order: 'asc' | 'desc' = 'desc'): Movie[] {
    return this.moviesService.getMoviesByDuration(order);
  }

  @Get('actor')
  @ApiOperation({ summary: 'Get movies by actor' })
  @ApiResponse({ status: 200, description: 'List of movies featuring a specific actor.', type: [Movie] })
  getMoviesByActor(@Query('actor') actor: string): Movie[] {
    return this.moviesService.getMoviesByActor(actor);
  }
}
