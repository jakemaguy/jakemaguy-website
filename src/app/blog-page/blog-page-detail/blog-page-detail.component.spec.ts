import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageDetailComponent } from './blog-page-detail.component';

describe('BlogPageDetailComponent', () => {
  let component: BlogPageDetailComponent;
  let fixture: ComponentFixture<BlogPageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
