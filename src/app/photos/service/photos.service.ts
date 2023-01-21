import { Injectable } from '@angular/core';
import { Photo } from '../../interfaces/AlbumTypes';
import { HttpClient } from '@angular/common/http';
import {Album_Base_URL} from '../../interfaces/Constants';
import { Observable } from 'rxjs';


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
getPhotos(albumId:number,start:number,limit:number):Observable<Photo[]> {
  return this.http.get<Photo[]>(`${Album_Base_URL}/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`, { headers });
}

}
