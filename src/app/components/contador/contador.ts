import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contador',
  imports: [TranslateModule],
  templateUrl: './contador.html',
  styleUrl: './contador.scss',
})
export class Contador implements OnInit, OnDestroy {
  dias: number = 0;
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;

  private intervalo: any;

  // 🩷 Data de início do relacionamento
  private dataInicio = new Date('2024-10-01T00:00:00');

  ngOnInit(): void {
    this.atualizarContador();
    this.intervalo = setInterval(() => {
      this.atualizarContador();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  private atualizarContador(): void {
    const agora = new Date();
    const diferencaMs = agora.getTime() - this.dataInicio.getTime();

    const totalSegundos = Math.floor(diferencaMs / 1000);

    this.dias = Math.floor(totalSegundos / (60 * 60 * 24));
    this.horas = Math.floor((totalSegundos % (60 * 60 * 24)) / (60 * 60));
    this.minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
    this.segundos = totalSegundos % 60;
  }
}
