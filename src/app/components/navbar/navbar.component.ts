import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  darkThemeEnabled: boolean = false;
  @Output() darkThemeToggled = new EventEmitter<boolean>();

  toggleDarkTheme() {
    this.darkThemeEnabled = !this.darkThemeEnabled;
    this.darkThemeToggled.emit(this.darkThemeEnabled);
  }
}
