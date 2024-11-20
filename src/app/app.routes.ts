import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { TrendsComponent } from './trends/trends.component';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';

// Definición de las rutas
export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'trends', component: TrendsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'profile', component: ProfileComponent },
];
