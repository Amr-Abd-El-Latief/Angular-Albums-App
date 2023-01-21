import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/interfaces/AlbumTypes';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  @Input() photo: Photo={
    albumId: 0,
    id:0,
    title: "No photo exist",
    url: "#",
    thumbnailUrl: "#"
  }; 

  constructor() { }

  ngOnInit(): void {  }

}
