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
});
