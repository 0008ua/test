import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxComponent } from './fox.component';

describe('FoxComponent', () => {
  let component: FoxComponent;
  let fixture: ComponentFixture<FoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoxComponent]
    });
    fixture = TestBed.createComponent(FoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
