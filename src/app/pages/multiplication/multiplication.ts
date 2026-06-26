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
    for (let i = 1; i < 11; i += 1) {
      d.push(i)
    }
  }
}