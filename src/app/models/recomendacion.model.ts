export interface Recomendacion {
    id: number;
    usuarioId: number; // ID del usuario relacionado
    tipo: 'pelicula' | 'bandaSonora'; // Tipo de recomendación
    referenciaId: number; // ID de la película o banda sonora recomendada
    razon: string; // Descripción de la razón de la recomendación
}