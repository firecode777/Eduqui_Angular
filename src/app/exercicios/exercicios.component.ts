import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent implements OnInit {

  @ViewChild('nome') nameKey!: ElementRef;

  constructor() { }

  ngOnInit(): void {
   ;
  }


starQuiz(){
    localStorage.setItem("nome", this.nameKey.nativeElement.value);
  }
}
