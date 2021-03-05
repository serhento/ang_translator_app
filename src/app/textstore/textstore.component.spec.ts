import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextstoreComponent } from './textstore.component';

describe('TextstoreComponent', () => {
  let component: TextstoreComponent;
  let fixture: ComponentFixture<TextstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
