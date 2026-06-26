import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multiplication',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './multiplication.html',
  styleUrls: ['./multiplication.css'],
})


export class Multiplication {
  data: number[] = [];
  constructor() {
    const d = this.data;
    for (let i = 0; i < 10; i += 1) {
      d.push(Math.floor(Math.random() * 100));
    }
  }
}