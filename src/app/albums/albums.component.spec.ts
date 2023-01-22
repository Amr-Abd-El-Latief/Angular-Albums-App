import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsComponent } from './albums.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FiveAlbums, SampleUSers } from '../interfaces/TestData';
import { By } from '@angular/platform-browser';

fdescribe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [AlbumsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the 5 input Albums', () => {
    component.albums = FiveAlbums;
    component.users = SampleUSers;
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('li'));
    expect(cards.length).toBe(5);
  });

  it('should have paginator', () => {
    const albumPaginator = fixture.debugElement.query(By.css('mat-paginator ')).nativeElement;
    expect(albumPaginator).toBeTruthy();
  })


  it("it should calculate limit and start with right values", function () {
    spyOn(component, "getAlbums");
    let tempEvent = { "previousPageIndex": 0, "pageIndex": 1, "pageSize": 20, "length": 100 };
    component.getAlbumsPage(tempEvent);
    fixture.detectChanges();
    /* Maybe this line unnecessary, cant try it atm */
   
    expect(component.getAlbums).toHaveBeenCalledOnceWith(0,20);
  });


});
