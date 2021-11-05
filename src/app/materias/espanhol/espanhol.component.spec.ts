import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspanholComponent } from './espanhol.component';

describe('EspanholComponent', () => {
  let component: EspanholComponent;
  let fixture: ComponentFixture<EspanholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspanholComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspanholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
