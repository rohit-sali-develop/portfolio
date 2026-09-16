import { Component } from '@angular/core';
import { NAV_LINKS, SITE } from '../../shared/site-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly site = SITE;
  readonly links = NAV_LINKS;
  readonly year = new Date().getFullYear();
}
