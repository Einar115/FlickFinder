export class Usuario {
    id: number; // ID único del usuario
    username: string; // Nombre de usuario
    email: string; // Correo electrónico
    password: string; // Contraseña
    firstName: string; // Nombre
    lastName: string; // Apellido
    dateOfBirth?: Date; // Fecha de nacimiento (opcional)
   //favorites?: string[]; // Lista de películas favoritas (opcional)
    //profilePictureUrl?: string; // URL de la foto de perfil (opcional)
  
    constructor(
      id: number,
      username: string,
      email: string,
      password: string,
      firstName: string,
      lastName: string,
      dateOfBirth?: Date,
      //favorites?: string[],
      //profilePictureUrl?: string
    ) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
      //this.favorites = favorites || [];
      //this.profilePictureUrl = profilePictureUrl || '';
    }
  }
  