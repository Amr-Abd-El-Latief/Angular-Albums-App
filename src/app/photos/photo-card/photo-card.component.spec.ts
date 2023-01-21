import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoCardComponent } from './photo-card.component';
import { By } from '@angular/platform-browser';


fdescribe('PhotoCardComponent', () => {
  let component: PhotoCardComponent;
  let fixture: ComponentFixture<PhotoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an image element',()=>{
    const photoImage = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(photoImage).toBeTruthy();
  })

  it('should have a Owner label',()=>{
    const photoLabel = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(photoLabel.innerHTML).toContain('Photo Title:');
  })



  it('should show the Album title', () => {
    component.photo =  {
      "albumId": 5,
      "id": 201,
      "title": "nesciunt dolorum consequatur ullam tempore accusamus debitis sit",
      "url": "https://via.placeholder.com/600/250289",
      "thumbnailUrl": "https://via.placeholder.com/150/250289"
    },
    fixture.detectChanges();
    const photoValueLabel = fixture.debugElement.query(By.css('#photoTitleValue')).nativeElement;
    expect(photoValueLabel.innerHTML).toContain('nesciunt dolorum');
  });



});
