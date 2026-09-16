import { Component, HostListener, afterNextRender, signal } from '@angular/core';
import { NAV_LINKS, SITE } from '../../shared/site-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly site = SITE;
  readonly links = NAV_LINKS;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly active = signal(NAV_LINKS[0].href);

  constructor() {
    afterNextRender(() => this.onScroll());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
    this.updateActive();
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  /** Highlights the link whose section most recently crossed the upper part of the viewport. */
  private updateActive(): void {
    const threshold = window.innerHeight * 0.4;
    let current = this.links[0].href;

    for (const link of this.links) {
      const el = document.querySelector<HTMLElement>(link.href);
      if (el && el.getBoundingClientRect().top <= threshold) {
        current = link.href;
      }
    }

    this.active.set(current);
  }
}
