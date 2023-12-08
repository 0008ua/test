import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitComponent } from './rabbit.component';

describe('RabbitComponent', () => {
  let component: RabbitComponent;
  let fixture: ComponentFixture<RabbitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RabbitComponent]
    });
    fixture = TestBed.createComponent(RabbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
