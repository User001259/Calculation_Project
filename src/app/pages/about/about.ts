import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {


  data: any[] = ["10", 20, 30, 40, 50, 60, 70, 80, 90, 100];

  test123: string = 'This is a test string for the About component.';

  ngOnInit(): void {
    console.log('This is a console log message from the About component.');
  }

}
