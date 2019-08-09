import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterdataComponent } from './enterdata.component';

describe('EnterdataComponent', () => {
  let component: EnterdataComponent;
  let fixture: ComponentFixture<EnterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
