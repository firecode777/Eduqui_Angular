import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologiaComponent } from './biologia.component';

describe('BiologiaComponent', () => {
  let component: BiologiaComponent;
  let fixture: ComponentFixture<BiologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
