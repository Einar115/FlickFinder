import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { TrendsComponent } from './components/trends/trends.component';
import { HistoryComponent } from './components/history/history.component';
import { SearchComponent } from './pages/search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './components/profile/profile.component';

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
