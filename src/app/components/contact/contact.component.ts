import { Component } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';
import { SITE } from '../../shared/site-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly site = SITE;
}
