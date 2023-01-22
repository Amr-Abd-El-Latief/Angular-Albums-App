import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllPhotos } from '../interfaces/TestData';
import { PhotosComponent } from './photos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { By } from '@angular/platform-browser';

fdescribe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      HttpClientTestingModule,
      RouterTestingModule
       ],
      declarations: [ PhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the 5 input Photos', () => {
    component.photos = AllPhotos;
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('li'));
    expect(cards.length).toBe(5);
  });

  it('should have paginator',()=>{
    const photosPaginator = fixture.debugElement.query(By.css('mat-paginator')).nativeElement;
    expect(photosPaginator).toBeTruthy();
  })

  it("it should calculate limit and start with right values", function () {
  component.setAlbumId(1);
    spyOn(component, "getPhotos");
    let tempEvent = { "previousPageIndex": 0, "pageIndex": 1, "pageSize": 20, "length": 100 };
    component.getPhotosPage(tempEvent);
    fixture.detectChanges();
    /* Maybe this line unnecessary, cant try it atm */
   
    expect(component.getPhotos).toHaveBeenCalledOnceWith(1,0,20);
  });
});
