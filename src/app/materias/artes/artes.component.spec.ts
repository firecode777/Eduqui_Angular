import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesComponent } from './artes.component';

describe('ArtesComponent', () => {
  let component: ArtesComponent;
  let fixture: ComponentFixture<ArtesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
