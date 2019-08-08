import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadsComponent } from './createads.component';

describe('CreateadsComponent', () => {
  let component: CreateadsComponent;
  let fixture: ComponentFixture<CreateadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
