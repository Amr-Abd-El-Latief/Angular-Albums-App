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
  public user: User = {
    id: 0,
    name:"no Owner Data exist for this User",
    username:"no Owner Data exist for this User",
  };
  constructor() { }

  ngOnInit(): void {
    let self = this;
    this.user = this.users.filter(item=>{
      return item.id=== self.album.userId
    
    })[0];
  }

}
