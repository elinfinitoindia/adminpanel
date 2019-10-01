import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestoresComponent } from './createstores.component';

describe('CreatestoresComponent', () => {
  let component: CreatestoresComponent;
  let fixture: ComponentFixture<CreatestoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatestoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
