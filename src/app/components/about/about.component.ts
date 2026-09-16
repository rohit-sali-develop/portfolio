import { Component } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';

interface FocusArea {
  title: string;
  description: string;
  icon: 'design' | 'build' | 'ship';
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly focusAreas: FocusArea[] = [
    {
      title: 'Understand',
      description:
        'Start from the real workflow and its constraints — market hours, broker limits, what a trader actually does after a losing day — and model the domain around that.',
      icon: 'design',
    },
    {
      title: 'Integrate',
      description:
        'Wire real systems together: broker REST + WebSocket feeds, payment webhooks, LLM APIs, OAuth — and design for the moment one of them misbehaves.',
      icon: 'build',
    },
    {
      title: 'Operate',
      description:
        'Own the deploy and what comes after: CI/CD, secrets, static egress IPs, background services, alerts, and the fixes that only surface in production.',
      icon: 'ship',
    },
  ];
}
