import { Component } from '@angular/core';
import { Galeria } from "../../components/galeria/galeria";
import { Contador } from "../../components/contador/contador";
import { Apresentacao } from "../../components/apresentacao/apresentacao";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-home',
  imports: [ Contador, Apresentacao, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
