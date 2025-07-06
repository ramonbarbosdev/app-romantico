import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  imports: [FormsModule, HlmSelectImports, BrnSelectImports],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  idiomaSelecionado: string = 'pt';

  constructor(private translate: TranslateService) {
    this.translate.use(this.idiomaSelecionado);
  }

  trocarIdioma(idioma: string) {
    this.translate.use(idioma);
    this.idiomaSelecionado = idioma;
  }
}
