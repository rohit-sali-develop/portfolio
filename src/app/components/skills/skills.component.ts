import { Component } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';
import { SKILL_GROUPS } from '../../shared/site-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly groups = SKILL_GROUPS;
}
