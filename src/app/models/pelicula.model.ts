export interface Pelicula {
    id: number; // ID de la API (TMDB)
    titulo: string;
    descripcion: string;
    genero: string;
    anioEstreno: number;
    posterUrl: string;
    calificacion: number;
}