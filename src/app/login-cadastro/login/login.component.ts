import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";


  onLogin(form: NgForm){
    console.log(form.value);
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // login (){
  //   this.authService.login(this.username, this.password).then(() =>{
  //     alert("Login efutado com sucesso ");
  //     this.router.navigate(["/materias"]);
  //   }).catch(err =>{
  //     alert (err);

  //   })  
  }
// }
