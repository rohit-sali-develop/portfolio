import { Component } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';
import { PROJECTS, TOOLS } from '../../shared/site-data';

/** Illustrative content for the preview panels — decorative, not real data. */
interface DashStat {
  label: string;
  fill: number; // 0–100, meter width
}

interface LogLine {
  time: string;
  tag: string;
  msg: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
  readonly tools = TOOLS;

  readonly dashStats: DashStat[] = [
    { label: 'Win rate', fill: 62 },
    { label: 'Profit factor', fill: 74 },
    { label: 'Expectancy', fill: 48 },
  ];

  /** Equity-curve polyline in a 200×64 viewBox (top-left origin). */
  readonly equityPoints =
    '0,50 12,46 24,48 36,40 48,43 60,35 72,38 84,30 96,33 108,25 120,28 132,21 144,24 156,16 168,19 180,12 192,14 200,8';

  /** Calendar heatmap intensity levels (0–3), 14 columns × 3 rows. */
  readonly heatCells = [
    0, 1, 2, 1, 3, 0, 0, 1, 2, 0, 3, 2, 1, 0,
    2, 3, 1, 0, 2, 3, 1, 0, 1, 3, 2, 1, 0, 2,
    1, 0, 2, 3, 1, 2, 0, 3, 1, 0, 2, 1, 3, 0,
  ];

  readonly logLines: LogLine[] = [
    { time: '08:00', tag: 'auth', msg: 'token refreshed via TOTP' },
    { time: '09:15', tag: 'tick', msg: 'RELIANCE 15m · inside candle ✓' },
    { time: '09:15', tag: 'order', msg: 'SUPER · sl 2841.5 · tgt 2874.0' },
    { time: '09:15', tag: 'fill', msg: 'entry 2852.25 × 14 · risk 0.8%' },
    { time: '11:02', tag: 'trail', msg: '1R hit → stop to breakeven' },
    { time: '15:09', tag: 'sweep', msg: 'square-off before 15:10 cutoff' },
    { time: '15:10', tag: 'alert', msg: 'telegram · daily summary sent' },
  ];
}
