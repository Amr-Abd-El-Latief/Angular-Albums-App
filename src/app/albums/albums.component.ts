import { Component, OnInit } from '@angular/core';
import { Album } from '../AlbumTypes';
import { AlbumsService } from '../service/albums.service';
import {PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  
  public albums:Album[] = [];
  constructor(private albumsService:AlbumsService) { 
    this. getAlbums(0,20);
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
    let limit:number = start+$event.pageSize;
    alert("start: " +start + " Limit : " +limit)
    this.getAlbums(start, limit);
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
