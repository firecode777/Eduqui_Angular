import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Postagem} from './postagem.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  private postagens: Postagem[] = []
  private listaPostagemAtualizada = new Subject<Postagem[]>();

  constructor (private httpClient: HttpClient){
  }
 

  getPostagens(): Postagem[]{
    return [...this.postagens]
  }

  getPosts(): void {
    this.httpClient.get <{mensagem: string, postagens:any}>('http://localhost:3000/api/postagens').pipe(map((dados) => {
      return dados.postagens.map((postagem: { _id: any; titulo: any; conteudo: any; }) => {
          return {
          id: postagem._id,
          titulo: postagem.titulo,
          conteudo: postagem.conteudo,        
          }
        })
    })).subscribe(
    (postagens) => {
    this.postagens = postagens;
    this.listaPostagemAtualizada.next([...this.postagens]);
    })
  }

  adicionarPostagem(titulo: string, conteudo: string){
    const conteudoEscrito: Postagem = {
      id: null,
      titulo: titulo,
      conteudo: conteudo,
    }
    this.httpClient.post<{mensagem: string, id: string}> ('http://localhost:3000/api/postagens',conteudoEscrito).subscribe(
    (dados) => {
    conteudoEscrito.id = dados.id;
    this.postagens.push(conteudoEscrito);
    this.listaPostagemAtualizada.next([...this.postagens]);
    })
  } 

  getListaDePostagensAtualizadaObservable() {
    return this.listaPostagemAtualizada.asObservable();
    }


}


