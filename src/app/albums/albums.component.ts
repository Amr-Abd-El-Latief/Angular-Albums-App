import { Component, OnInit } from '@angular/core';
import { Album, User } from '../interfaces/AlbumTypes';
import { AlbumsService } from './service/albums.service';
import {PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  
  public albums:Album[] = [];  
  public users:User[] = [];  
  constructor(private albumsService:AlbumsService) { 
    let self= this;
    this.getAlbums(0,20);
   this.albumsService.getAllUsers().subscribe(res=>{
      self.users = res;
      
    });
  }

  ngOnInit(): void {
  }

  /**
   * 
   * function to get the Albums of the next page or previous page of paginator
   * @param $event paginator Event content data on click next page Event
   */
  getAlbumsPage($event:PageEvent){
    let self = this;
    console.log("paginator event : " +JSON.stringify($event))
    let start:number = $event.pageIndex*$event.pageSize-$event.pageSize;
    let limit:number = $event.pageSize;
    self.getAlbums(start, limit);
  }

  /**
   * function to get number (limit) of Albums data from the Albums Api 
   * @param {number} start  start of the retrieved albums list
   * @param {number} limit  end of the retrieved albums list
   * 
   */
  getAlbums(start:number, limit:number){
    let self= this;
    this.albumsService.getAlbums(start,limit).subscribe(res=>{
      self.albums = <Album[]>res;
   })
  }

}
