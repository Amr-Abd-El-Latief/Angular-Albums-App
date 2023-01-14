import { Injectable } from '@angular/core';
import { Album } from '../AlbumTypes';
import { HttpClient } from '@angular/common/http';
import { of} from 'rxjs';

const albumsApi = "https://jsonplaceholder.typicode.com";
const headers = {
  Accept: "application/json"
 
};

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albums: Album[] = [];
  constructor(private http:HttpClient) { }

 /**
 * gets All the albums 
  * @returns all the albums data
 */
  getAllAlbums(){
    if (this.albums.length>0) {
      return of(this.albums);
    }
    return  this.http.get(`${albumsApi}/albums`)
  }

/**
 * gets pre defined limit of albums from start to limit
 * @param {number} start  start of the retrieved albums list
 * @param {number} limit  end of the retrieved albums list
 * @returns set of albums data from start to the limit
 */
  getAlbums(start:number,limit:number) {
    return this.http.get(`${albumsApi}/albums?_start=${start}&_limit=${limit}`, { headers });
  }

}
