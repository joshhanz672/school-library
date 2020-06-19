import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorFormComponent } from './book-author-form.component';

describe('BookAuthorFormComponent', () => {
  let component: BookAuthorFormComponent;
  let fixture: ComponentFixture<BookAuthorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAuthorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAuthorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
