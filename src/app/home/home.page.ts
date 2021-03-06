import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  constructor(private nav: NavController) {

  }

  listaDados: any[] = [{
    id: 1,
    nome: "Brazão Gastronomia",
    imagem: "https://picsum.photos/200/100",
    stars: 4,
    cidade: "Macaé",
    estado: "RJ"
  },{
    id: 2,
    nome: "Oasis urbano",
    imagem: "https://picsum.photos/200/100",
    stars: 2,
    cidade: "Macaé",
    estado: "RJ"
  }]

  
  ngOnInit(): void{

  }

  ngOnDestroy(): void{

  }

}
