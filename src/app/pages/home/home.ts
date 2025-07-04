import { Component } from '@angular/core';
import { Galeria } from "../../components/galeria/galeria";
import { Contador } from "../../components/contador/contador";

@Component({
  selector: 'app-home',
  imports: [Galeria, Contador],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
