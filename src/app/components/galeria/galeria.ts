import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria {
  fotos = ['assets/teste.png', 'assets/teste2.jpeg','assets/teste3.jpg'];
}
