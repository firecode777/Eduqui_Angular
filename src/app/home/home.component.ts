import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ɵangular_material_src_material_core_core_a } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images = [
    {path: 'https://images.pexels.com/photos/3636822/pexels-photo-3636822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {path: 'https://images.pexels.com/photos/4143800/pexels-photo-4143800.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'},
    {path: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {path: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'},
   
];
  

  constructor(private breakpointObserver: BreakpointObserver) {}
}
