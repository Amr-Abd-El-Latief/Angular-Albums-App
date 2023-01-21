import { Component, Input, OnInit } from '@angular/core';
import { Album, User } from 'src/app/interfaces/AlbumTypes';

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
  @Input() users: User[] = [];
  user: User = {
    id: 0,
    name:"no Owner Data exist for this User",
    username:"no Owner Data exist for this User",
  };
  constructor() { }

  ngOnInit(): void {
    this.user = this.users.filter(item=>{
      return item.id=== this.album.userId
    
    })[0];
  }

}
