import { Component, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  useDefault!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}

  private escuro = false

  toggle(event: MatSlideToggleChange) {
    if(event.checked){ 
    this.escuro = true  
    console.log('Toggle fired');
    this.useDefault = event.checked;
    }
    else{
      this.escuro = false
    }
  }
  

  @HostBinding('class') get themeMode() {
    return this.escuro ? 'tema-escuro' : 'tema-claro';
  }
}
