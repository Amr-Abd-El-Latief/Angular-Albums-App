import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorComponent } from './error.component';
import { By } from '@angular/platform-browser';

fdescribe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an Error Title',()=>{
    const errorMessage = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(errorMessage.innerHTML).toBe('404: Page not Found!');
  })

  it('should have an Error Detailed Message',()=>{
    const errorMessage = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(errorMessage.innerHTML).toBe("The Page you are looking for cannot be found or you don't have access to this page");
  })

});
