import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
// Router
import { AppRoutingModule } from './app-routing.module';

// Layout
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DragDropModule} from '@angular/cdk/drag-drop';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VerificarEmailComponent } from './verificar-email/verificar-email.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MateriaPageComponent } from './materia-page/materia-page.component';
import { InfoComponent } from './info/info.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { LoginComponent } from './login-cadastro/login/login.component';
import { CadastroComponent } from './login-cadastro/cadastro/cadastro.component';
import {ExerciciosComponent} from './exercicios/exercicios.component';
// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from  '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
// materias component
import { MatematicaComponent } from './materias/matematica/matematica.component';
import { PortuguesComponent } from './materias/portugues/portugues.component';
import { InglesComponent } from './materias/ingles/ingles.component';
import { ArtesComponent } from './materias/artes/artes.component';
import { EspanholComponent } from './materias/espanhol/espanhol.component';
import { GeografiaComponent } from './materias/geografia/geografia.component';
import { HistoriaComponent } from './materias/historia/historia.component';
import { QuimicaComponent } from './materias/quimica/quimica.component';
import { FisicaComponent } from './materias/fisica/fisica.component';
import { LiteraturaComponent } from './materias/literatura/literatura.component';
import { BiologiaComponent } from './materias/biologia/biologia.component';
import { QuizComponent } from './quiz/quiz.component';
import { ChangeBgDirective } from './change-bg.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PerfilComponent,
    VerificarEmailComponent,
    EsqueceuSenhaComponent,
    AdminDashboardComponent,
    ExerciciosComponent,
    InfoComponent,
    AjudaComponent,
    MateriaPageComponent,
    MatematicaComponent,
    PortuguesComponent,
    InglesComponent,
    ArtesComponent,
    EspanholComponent,
    GeografiaComponent,
    HistoriaComponent,
    QuimicaComponent,
    FisicaComponent,
    LiteraturaComponent,
    BiologiaComponent,
    LoginComponent,
    CadastroComponent,
    QuizComponent,
    ChangeBgDirective,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    IvyCarouselModule,
    NgbModule,
    DragDropModule,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

