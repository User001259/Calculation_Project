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

  ngOnInit() {
    this.generate_myl();
  }
  generate_myl() {
    for (let i = 1; i < this.size; i += 1) {
      this.d.push(i);

    }
  }
  add(n: number) {
    this.size += n;
    this.generate_myl();
  }
  resetValue() {
    this.size = 0;
    this.generate_myl();
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


  constructor() {}
}
