import { Injectable } from '@angular/core';
import { usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  private users: usuario[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }

  constructor() { }
}
