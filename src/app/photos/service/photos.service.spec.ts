import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PhotosService } from './photos.service';
import { Photo } from 'src/app/interfaces/AlbumTypes';
import { AllPhotos } from 'src/app/interfaces/TestData';
import {Album_Base_URL} from '../../interfaces/Constants'
fdescribe('PhotosService', () => {
  let service: PhotosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PhotosService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of Photos', () => {
    const result: Photo[] = AllPhotos;
  
    service.getPhotos(1,0,5).subscribe(results => {
      expect(results).toBeTruthy();
      expect(results.length).toEqual(5);
    })
  
    const req = httpMock.expectOne(Album_Base_URL + '/photos?albumId=1&_start=0&_limit=5');
    expect(req.request.method).toBe('GET');
    req.flush(result);
  
  })
});





