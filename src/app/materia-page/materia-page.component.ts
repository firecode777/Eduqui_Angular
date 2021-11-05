import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-materia-page',
  templateUrl: './materia-page.component.html',
  styleUrls: ['./materia-page.component.css']
})
export class MateriaPageComponent{
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Portugues', cols: 1, rows: 1 },
          { title: 'Matematica', cols: 1, rows: 1 },
          { title: 'Geografia', cols: 1, rows: 1 },
          { title: 'Historia', cols: 1, rows: 1 },
          { title: 'Quimica', cols: 1, rows: 1 },
          { title: 'Fisica', cols: 1, rows: 1 },
          { title: 'Ingles', cols: 1, rows: 1 },
          { title: 'Espanhol', cols: 1, rows: 1 },
          { title: 'Artes', cols: 1, rows: 1 },
          { title: 'Literatura', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Portugues', cols: 1, rows: 1 },
        { title: 'Matematica', cols: 1, rows: 1 },
        { title: 'Geografia', cols: 1, rows: 1 },
        { title: 'Historia', cols: 1, rows: 1 },
        { title: 'Quimica', cols: 1, rows: 1 },
        { title: 'Fisica', cols: 1, rows: 1 },
        { title: 'Ingles', cols: 1, rows: 1 },
        { title: 'Espanhol', cols: 1, rows: 1 },
        { title: 'Artes', cols: 1, rows: 1 },
        { title: 'Literatura', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
  
