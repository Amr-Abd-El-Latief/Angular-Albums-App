import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/AlbumTypes';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() album: Album={
    userId: 0,
    id:0,
    title: "no Album exists"
  }; 
  constructor() { }

  ngOnInit(): void {
  }

}
