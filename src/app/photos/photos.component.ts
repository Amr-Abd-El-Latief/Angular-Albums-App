import { Component, OnInit } from '@angular/core';
import { Photo, User } from 'src/app/interfaces/AlbumTypes';
import { PhotosService } from './service/photos.service';
import {PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  public photos:Photo[] = [];          // list of photos to show in the component
  private albumId:any='1';            // albumId (primary key) of the retrieved photos

  constructor(private photosService:PhotosService,private activatedRoute: ActivatedRoute) { }

    owner: User = {
      id: 0,
      name:"no Owner Data exist for this User",
      username:"no Owner Data exist for this User",
    };

  ngOnInit(): void {
    let self= this;
    this.albumId = this.activatedRoute.snapshot.paramMap.get('albumId');
    this.getPhotos(self.albumId,0,20);
  }


  /**
   * 
   * function to get the Albums of the next page or previous page of paginator
   * @param $event paginator Event content data on click next page Event
   */
  getPhotosPage($event:PageEvent){
    let start:number = $event.pageIndex*$event.pageSize-$event.pageSize;
    let limit:number = start+$event.pageSize;
    this.getPhotos(this.albumId,start, limit);
  }

  /**
   * function to get number (limit) of Photos data from the Photos Api 
 * @param {number} albumId  the id of the album
 * @param {number} start  start of the retrieved photos list
 * @param {number} limit  end of the retrieved photos list
   */
  getPhotos(albumId:number, start:number, limit:number){
    let self= this;
    this.photosService.getPhotos(albumId,start,limit).subscribe(res=>{
      self.photos = <Photo[]>res;
   })
  }

  public setAlbumId(albumId:number){
   this.albumId = albumId;
  }
}
