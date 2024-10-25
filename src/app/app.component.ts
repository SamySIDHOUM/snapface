import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Test',
      'Lorem lapsus',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      3
    );
    this.myOtherSnap = new FaceSnap(
      'Test 1',
      'Lorem lapsus',
      'https://cdn.pixabay.com/photo/2018/08/31/18/21/fantasy-3645269_1280.jpg',
      new Date(),
      7
    );

    this.myLastSnap = new FaceSnap(
      'Test 2',
      'Lorem lapsus',
      'https://cdn.pixabay.com/photo/2023/10/24/02/49/bike-8337261_1280.jpg',
      new Date(),
      9
    );
  }
}
