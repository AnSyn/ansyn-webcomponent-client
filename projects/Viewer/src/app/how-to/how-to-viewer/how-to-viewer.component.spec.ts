import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToViewerComponent } from './how-to-viewer.component';

describe('HowToViewerComponent', () => {
  let component: HowToViewerComponent;
  let fixture: ComponentFixture<HowToViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
