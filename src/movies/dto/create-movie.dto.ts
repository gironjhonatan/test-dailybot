export class CreateMovieDto {
    title: string = ''; // Inicialización con un valor por defecto
    year: number = 0;   // Otro ejemplo de inicialización
    genres: string[] = [];
    duration: number = 0;
    imdbRating: number = 0;
    viewerCount: number = 0;
    cast: string[] = [];
  }
  