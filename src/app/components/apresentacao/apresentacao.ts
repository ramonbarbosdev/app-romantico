import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-apresentacao',
  imports: [CommonModule, TranslateModule],
  templateUrl: './apresentacao.html',
  styleUrl: './apresentacao.scss',
})
export class Apresentacao {
  translateY = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight;

    // Normaliza o scroll entre 0 e 1
    const progress = Math.min(scrollY / maxScroll, 1);

    // Move de 0 até 50% da tela vertical
    this.translateY = progress * 30;
  }
}
