import { Component } from '@angular/core';

import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
  selector: 'app-header',
  imports: [HlmSelectImports, BrnSelectImports],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
