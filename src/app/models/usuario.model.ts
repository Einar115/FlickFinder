import { Preferencia } from "./preferencia.model";

export interface Usuario {
  id: number;
  nombreUsuario: string;
  correo: string;
  password: string;
  fechaNacimiento: Date;
  preferencias: Preferencia[];
} 