import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoastsPageComponent } from './roasts-page.component';

describe('RoastsPageComponent', () => {
  let component: RoastsPageComponent;
  let fixture: ComponentFixture<RoastsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoastsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoastsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
