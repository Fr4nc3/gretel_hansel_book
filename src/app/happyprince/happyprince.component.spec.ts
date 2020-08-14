import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyprinceComponent } from './happyprince.component';

describe('HappyprinceComponent', () => {
  let component: HappyprinceComponent;
  let fixture: ComponentFixture<HappyprinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyprinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyprinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
