import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  images = [
    {path: 'https://image.freepik.com/fotos-gratis/letras-de-feliz-natal-em-fundo-festivo_23-2149124474.jpg'},
    {path: 'https://image.freepik.com/fotos-gratis/aluno-feliz-posando-contra-a-parede-rosa_273609-20447.jpg'},
    {path: '/assets/photo-1489365091240-6a18fc761ec2.jpg'},
    {path: '/assets/photo-1547691889-841a6f1c5ca6.jpg'},
    {path: '/assets/photo-1595433562696-a8b1cb8bdad1.jpg'},
    {path: '/assets/photo-1495563381401-ecfbcaaa60f2.jpg'},
    {path: '/assets/photo-1534801022022-6e319a11f249.jpg'},
    {path: '/assets/photo-1524324463413-57e3d8392df1.jpg'},
    {path: '/assets/photo-1506086679524-493c64fdfaa6.jpg'},
    {path: '/assets/photo-1569749450723-1836b067fb64.jpg'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
