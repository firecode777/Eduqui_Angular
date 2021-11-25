import { NgModule, Injectable, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VerificarEmailComponent } from './verificar-email/verificar-email.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import {AjudaComponent} from './ajuda/ajuda.component';
import {InfoComponent} from './info/info.component';
import {MateriaPageComponent} from './materia-page/materia-page.component';
import {ExerciciosComponent} from './exercicios/exercicios.component';
import {LoginComponent} from './login-cadastro/login/login.component';
import {CadastroComponent} from './login-cadastro/cadastro/cadastro.component';
import {QuizComponent} from './quiz/quiz.component';

// materias
import { MatematicaComponent } from './materias/matematica/matematica.component';
import { PortuguesComponent } from './materias/portugues/portugues.component';
import { ArtesComponent } from './materias/artes/artes.component';
import { InglesComponent } from './materias/ingles/ingles.component';
import { LiteraturaComponent } from './materias/literatura/literatura.component';
import { EspanholComponent } from './materias/espanhol/espanhol.component';
import { GeografiaComponent } from './materias/geografia/geografia.component';
import { HistoriaComponent } from './materias/historia/historia.component';
import { BiologiaComponent} from './materias/biologia/biologia.component'
import { QuimicaComponent } from './materias/quimica/quimica.component';
import { FisicaComponent } from './materias/fisica/fisica.component';


const routes: Routes = [
  {path: '', component: LoginComponent, },
  {path: 'home', component:HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'nav', component: NavComponent},
  {path: 'materia', component: MateriaPageComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'e-forum', component: VerificarEmailComponent},
  {path: 'editar/:idPostagem', component: VerificarEmailComponent},
  {path: 'esqueceu-senha', component: EsqueceuSenhaComponent},
  {path: 'ajuda', component: AjudaComponent},
  {path: 'info', component: InfoComponent},

  {path: 'exercicios', component: ExerciciosComponent},
  {path: 'materia/matematica', component: MatematicaComponent},
  {path: 'materia/portugues', component: PortuguesComponent},
  {path: 'materia/artes', component: ArtesComponent},
  {path: 'materia/ingles', component: InglesComponent},
  {path: 'materia/literatura', component: LiteraturaComponent},
  {path: 'materia/espanhol', component: EspanholComponent},
  {path: 'materia/geografia', component: GeografiaComponent},
  {path: 'materia/historia', component: HistoriaComponent},
  {path: 'materia/biologia', component: BiologiaComponent},
  {path: 'materia/quimica', component: QuimicaComponent},
  {path: 'materia/fisica', component: FisicaComponent},
  {path: 'quiz', component: QuizComponent},
]
// @Injectable()
// export class SampleGuard implements CanActivate{
//   canActivate() {
//     return true;
//   }
// }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
