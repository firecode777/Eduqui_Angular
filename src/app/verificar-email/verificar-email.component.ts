import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Postagem } from './postagem.model';
import {PostagensService} from './postagens.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verificar-email',
  templateUrl: './verificar-email.component.html',
  styleUrls: ['./verificar-email.component.css']
})
export class VerificarEmailComponent implements OnInit {

  postagens: Postagem[] = [];
  private postagemSubscription!: Subscription;
  private modo: string = "criar";
  private idPostagem: null | string = "";
  posts!: Postagem;

  constructor(public postagensService: PostagensService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postagens = this.postagensService.getPostagens();
    this.postagemSubscription = this.postagensService.getListaDePostagensAtualizadaObservable().subscribe((postagens: Postagem[]) => {
      this.postagens = postagens;
    })
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("idPostagem")){
        this.modo = "editar";
        this.idPostagem = paramMap.get("idPostagem");
        
      }else{
        this.modo = "criar";
        this.idPostagem = null;
       }
    });
  }


  onPublicar(form: NgForm){
    if (form.invalid) {
      return;
    }else{ 
      console.log(form.value)
      this.postagensService.adicionarPostagem(
      form.value.titulo,
      form.value.conteudo
    );
    form.resetForm();
    }
  }
}
