import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumCardComponent } from './album-card.component';
import { By } from '@angular/platform-browser';


describe('AlbumCardComponent', () => {
  let component: AlbumCardComponent;
  let fixture: ComponentFixture<AlbumCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an image element',()=>{
    const albumImage = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(albumImage.innerHTML).toBeTruthy();
  })


});
