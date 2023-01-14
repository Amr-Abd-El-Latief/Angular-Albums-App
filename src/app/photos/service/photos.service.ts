import { Injectable } from '@angular/core';
import { Photo } from '../../AlbumTypes';
import { HttpClient } from '@angular/common/http';

const photosApi = "https://jsonplaceholder.typicode.com";

const headers = {
  Accept: "application/json",
};
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }

/**
 * gets pre defined limit of albums from start to limit
 * @param {number} albumId  the id of the album
 * @param {number} start  start of the retrieved photos list
 * @param {number} limit  end of the retrieved photos list
 * @returns set of albums data from start to the limit
 */
getPhotos(albumId:number,start:number,limit:number) {
  return this.http.get(`${photosApi}/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`, { headers });
}

}
