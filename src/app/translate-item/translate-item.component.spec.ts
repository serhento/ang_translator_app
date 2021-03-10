import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateItemComponent } from './translate-item.component';

describe('TranslateItemComponent', () => {
  let component: TranslateItemComponent;
  let fixture: ComponentFixture<TranslateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
