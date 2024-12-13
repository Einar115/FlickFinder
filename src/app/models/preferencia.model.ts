export interface Preferencia {
    id: number;
    usuarioId: number;
    tipo: 'pelicula' | 'bandaSonora';
    referenciaId: number;
    fechaAgregada: string;
}
  