import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReqFormComponent } from './book-req-form.component';

describe('BookReqFormComponent', () => {
  let component: BookReqFormComponent;
  let fixture: ComponentFixture<BookReqFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookReqFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
