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
  size: number = 11;
  text: string = 'hello world';
  data: number[] = [];
  d: number[] = this.data;
  name: string = 'Multiplication Table';
  generate_myl() {
    this.d = [];
    for (let i = 1; i < this.size; i += 1) {
      this.d.push(i);
    }
  }
  add(n: number) {
    this.size += n;
    this.generate_myl();
    console.log(this.size)
  }
  // data2: number[][] = [];
  // size: number = 11;

  // getInnerArray(j: number): number[] {
  //   let tempArray: number[] = [];
  //   for (let i = 1; i < this.size; i++) {
  //     tempArray.push(i * j);
  //   }
  //   return tempArray;
  // }

  ngOnInit() {
    this.generate_myl();
  }

  constructor() {}
}
