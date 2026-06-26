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
  name: string = 'Multiplication Table';
  // data2: number[][] = [];
  // size: number = 11;

  // getInnerArray(j: number): number[] {
  //   let tempArray: number[] = [];
  //   for (let i = 1; i < this.size; i++) {
  //     tempArray.push(i * j);
  //   }
  //   return tempArray;
  // }

  d: number[] = this.data;

  ngOnInit() {
    for (let i = 1; i < 11; i += 1) {
      this.d.push(i);
    }

    // for (let i = 1; i < this.size; i++) {
    //   this.data2.push(this.getInnerArray(i));
    // }
  }

  text: string = 'hello world';

  constructor() {}
}
