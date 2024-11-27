export class CreateMovieDto {
    title: string = ''; 
    year: number = 0;   
    genres: string[] = [];
    duration: number = 0;
    imdbRating: number = 0;
    viewerCount: number = 0;
    cast: string[] = [];
    posterImage: string = '';
  }
  