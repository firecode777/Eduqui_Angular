import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import {PerguntasService} from '../services/perguntas.service'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public nome: string = "";
  public perguntasLista: any = [];
  public currentQuestion: number = 0;
  public pontos: number = 0;
  timer = 60;
  currentAnswer: number = 0;
  respostaIncorreta: number = 0;
  intervalo$:any;
  progresso: string = "0";
  quizCompleto: boolean = false;

  constructor(private perguntasService: PerguntasService) { }

  ngOnInit(): void {
    this.nome = localStorage.getItem("nome")!;
    this.getTodasPerguntas();
    this.startTimer();
  }

  getTodasPerguntas(){
    this.perguntasService.getQuestionsJson()
    .subscribe(res => {
    this.perguntasLista = res.perguntas
    })
  }

  proximaPergunta(){
    this.currentQuestion++;
  }

  perguntaAnterior(){
    this.currentQuestion--;
  }

  resposta(currentQno:number, opcao:any){
    if(currentQno === this.perguntasLista.length){
      this.quizCompleto = true;
      this.pararTimer();
    }
    if(opcao.correta){
      this.pontos+= 10;
      this.currentAnswer++;
      setTimeout(()=> {
        this.currentQuestion++;
        this.resetTimer();
        this.getPorcentagemProgresso()
      },1000)

    }else {
      setTimeout(() => {
      this.currentQuestion++;
      this.respostaIncorreta++;
      this.resetTimer();
      this.getPorcentagemProgresso()
      }, 1000)
      this.pontos-=10;
    }
  }
  startTimer(){
    this.intervalo$ = interval(1000)
    .subscribe(val => {
      this.timer--;
      if(this.timer===0){
        this.currentQuestion++;
        this.timer = 60;
        this.pontos-=10;
      }
    });
    setTimeout(()=> {
      this.intervalo$.unsubscribe()
    }, 600000)
  }
  pararTimer(){
    this.intervalo$.unsubscribe();
    this.timer=0;
  }
  resetTimer(){
    this.pararTimer();
    this.timer = 60;
    this.startTimer();
  }
  resetarQuiz(){
    this.resetTimer();
    this.getTodasPerguntas();
    this.pontos = 0;
    this.timer = 60;
    this.currentQuestion=0;
    this.progresso = "0";
  }

  getPorcentagemProgresso(){
    this.progresso = ((this.currentQuestion/this.perguntasLista.length)*100).toString();
    return this.progresso;
  }


}
