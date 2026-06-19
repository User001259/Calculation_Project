import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Gallery } from './pages/gallery/gallery';

export const routes: Routes = [
  {
    path: '', component: Home
  },
  {
    path: 'galeria', component: Gallery
  },
  {
    path: 'about', component: About
  }
];
