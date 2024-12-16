export interface Lista{
    id: number;
    usuarioId: number; // ID del usuario que creó la lista
    nombre: string; // Nombre de la lista
    elementos: Array<{ tipo: 'pelicula' | 'album' | "pista"; id: number }>;
}