import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MostrarUsuariosComponent } from './pages/mostrar-usuarios/mostrar-usuarios.component';
import { LoginGuard } from './authentication/login.guard';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'register', component: RegisterComponent},
    { path: 'mostrar', component: MostrarUsuariosComponent },
    { path: 'movie/:id', component: MovieDetailsComponent },
    { path: 'favoritos', component: FavoritesComponent },
    { path: '**', redirectTo: 'home' }
];