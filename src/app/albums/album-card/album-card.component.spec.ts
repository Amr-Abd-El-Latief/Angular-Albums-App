import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumCardComponent } from './album-card.component';
import { By } from '@angular/platform-browser';
import { SampleUSers } from 'src/app/interfaces/TestData';


fdescribe('AlbumCardComponent', () => {
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
    expect(albumImage).toBeTruthy();
  })

  it('should have a Title label',()=>{
    const albumLabel = fixture.debugElement.query(By.css('#albumTitle')).nativeElement;
    expect(albumLabel.innerHTML).toContain('Title');
  })

  it('should have a Owner label',()=>{
    const albumLabel = fixture.debugElement.query(By.css('#albumOwner')).nativeElement;
    expect(albumLabel.innerHTML).toContain('Owner');
  })



  it('should show the Album title', () => {
    component.album = {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    };
    fixture.detectChanges();
    const albumValueLabel = fixture.debugElement.query(By.css('#albumTitleValue')).nativeElement;
    expect(albumValueLabel.innerHTML).toContain('quidem molestiae enim');
  });

  it('should show the Album Owner', () => {
    component.album = {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    };

    component.users = SampleUSers;
    component.ngOnInit();
    fixture.detectChanges();
    const albumValueLabel = fixture.debugElement.query(By.css('#albumOwnerValue')).nativeElement;
    expect(albumValueLabel.innerHTML).toContain('Bret');
  });


});
