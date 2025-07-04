import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.scss',
})
export class Contador {
  diasJuntos = 0;
  dataInicio = new Date('2023-01-01'); // <== coloque aqui a data de início

  ngOnInit() {
    const hoje = new Date();
    const diffTime = Math.abs(hoje.getTime() - this.dataInicio.getTime());
    this.diasJuntos = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}
