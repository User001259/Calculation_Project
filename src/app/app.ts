import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {Multiplication} from './pages/multiplication/multiplication';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Multiplication],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected readonly title = signal('Calculation');
}
