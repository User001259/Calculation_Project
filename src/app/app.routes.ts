import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Gallery } from './pages/gallery/gallery';
import { Multiplication } from './pages/multiplication/multiplication';
import { Forms} from './pages/forms/forms';

export const routes: Routes = [
  {
    path: '', component: Home
  },
  {
    path: 'galeria', component: Gallery
  },
  {
    path: 'about', component: About
  },
   {
    path: 'multiplication', component: Multiplication
  },
  {
    path: 'forms', component: Forms
  }
];
