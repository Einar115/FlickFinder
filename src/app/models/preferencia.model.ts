export interface Preferencia {
    tipo: 'pelicula' | 'banda'; // Restricción a valores permitidos
    referenciaId: string; // ID de la película o banda (proveniente de la API)
    nombre: string; // Nombre de la película o banda para mostrar al usuario
}
  