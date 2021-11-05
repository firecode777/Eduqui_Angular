import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MateriaPageComponent } from './materia-page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

describe('MateriaPageComponent', () => {
  let component: MateriaPageComponent;
  let fixture: ComponentFixture<MateriaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
