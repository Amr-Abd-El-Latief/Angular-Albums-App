import { TestBed } from '@angular/core/testing';
import { AlbumsService } from './albums.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Album } from 'src/app/interfaces/AlbumTypes';
import { Album_Base_URL } from 'src/app/interfaces/Constants';
import { AllAlbums, FiveAlbums } from 'src/app/interfaces/TestData';

fdescribe('AlbumsService', () => {
  let service: AlbumsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AlbumsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of Albums', () => {
    const result: Album[] = FiveAlbums;

    service.getAllAlbums().subscribe(results => {
      expect(results).toBeTruthy();
      expect(results.length).toEqual(5);
    })

    const req = httpMock.expectOne(Album_Base_URL + '/albums');
    expect(req.request.method).toBe('GET');
    req.flush(result);

  })

  it('should return list of Only five albums when called with 0, 5', () => {
    const result: Album[] =FiveAlbums;

    service.getAlbums(0,5).subscribe(results => {
      expect(results).toBeTruthy();
      expect(results.length).toEqual(5);
    })

    const req = httpMock.expectOne(Album_Base_URL + '/albums?_start=0&_limit=5');
    expect(req.request.method).toBe('GET');
    req.flush(result);

  })


});
