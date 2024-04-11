import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-flag-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './flag-card.component.html',
  styleUrl: './flag-card.component.css',
})
export class FlagCardComponent {
  @Input() darkThemeEnabled?: boolean;

  @Input() name?: string;
  @Input() capital?: string[];
  @Input() population?: number;
  @Input() region?: string;
  @Input() img?: string;
}
