import { Injectable } from '@angular/core';
import { Album, User } from '../../interfaces/AlbumTypes';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {Album_Base_URL} from '../../interfaces/Constants';

const headers = {
  Accept: "application/json"
 
};

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albums: Album[] = [];
  private Users: User[] = [];

  constructor(private http:HttpClient) { }

 /**
 * gets All the albums 
  * @returns all the albums data
 */
  getAllAlbums(): Observable<Album[]> {
    if (this.albums.length>0) {
      return of(this.albums);
    }
    return  this.http.get<Album[]>(`${Album_Base_URL}/albums`)
  }

/**
 * gets pre defined limit of albums from start to limit
 * @param {number} start  start of the retrieved albums list
 * @param {number} limit  end of the retrieved albums list
 * @returns set of albums data from start to the limit
 */
  getAlbums(start:number,limit:number): Observable<Album[]> {
    return this.http.get<Album[]>(`${Album_Base_URL}/albums?_start=${start}&_limit=${limit}`, { headers });
  }



   /**
 * gets All the Users Data 
  * @returns all the Users Data 
 */
   getAllUsers(): Observable<User[]> {
    if (this.Users.length>0) {
      return of(this.Users);
    }
    return  this.http.get<User[]>(`${Album_Base_URL}/users`)
  }


}
