import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortuguesComponent } from './portugues.component';

describe('PortuguesComponent', () => {
  let component: PortuguesComponent;
  let fixture: ComponentFixture<PortuguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortuguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortuguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
