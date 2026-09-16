import { Component } from '@angular/core';
import { SITE } from '../../shared/site-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly site = SITE;
}
