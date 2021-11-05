import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavComponent } from './nav.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
  
  it('should trigger toggle...', () => {
    const componentDebug = fixture.debugElement;
    const slider: MatSlideToggle = 
       componentDebug.query(By.css('form mat-slide-toggle')).componentInstance;
  
    console.log('before ' + slider.checked);
    slider.toggle();
  
    fixture.detectChanges();
  
    console.log('after ' + slider.checked);
    console.log('useDefault ' + component.useDefault);
  });
});
