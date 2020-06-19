import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLocFormComponent } from './book-loc-form.component';

describe('BookLocFormComponent', () => {
  let component: BookLocFormComponent;
  let fixture: ComponentFixture<BookLocFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLocFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLocFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
