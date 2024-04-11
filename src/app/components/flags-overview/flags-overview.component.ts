import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FlagsService } from '../../services/flags.service';
import { FlagCardComponent } from '../flag-card/flag-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-flags-overview',
  standalone: true,
  imports: [
    NavbarComponent,
    FlagCardComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './flags-overview.component.html',
  styleUrl: './flags-overview.component.css',
})
export class FlagsOverviewComponent implements OnInit {
  flags?: any;
  filteredFlags: any[] = [];
  searchText: string = '';
  value: string = '';

  darkThemeEnabled: boolean = false;

  continents: any[] = [
    { value: 'Africa', viewValue: 'Africa' },
    { value: 'Americas', viewValue: 'Americas' },
    { value: 'Asia', viewValue: 'Asia' },
    { value: 'Europe', viewValue: 'Europe' },
    { value: 'Oceania', viewValue: 'Oceania' },
  ];

  selectedRegion: string | null = null;

  constructor(private flagService: FlagsService) {}

  ngOnInit(): void {
    this.getAllFlags();
  }

  getAllFlags(): void {
    this.flagService.getAllFlags().subscribe((flags) => {
      this.flags = flags;
      console.log('All Flags', this.flags);

      this.filteredFlags = this.flags.slice();
    });
  }

  filterFlagsByName(event: any): void {
    const name = event.target?.value;
    if (!name) {
      this.applyFilters();
      return;
    }
    this.filteredFlags = this.flags.filter((flag: any) => {
      const matchesSearch =
        !this.value ||
        flag.name.common.toLowerCase().includes(this.value.toLowerCase());

      return matchesSearch;
    });
  }

  clearSearchInput(): void {
    this.applyFilters();
    this.searchText = '';
  }

  // Method to handle dropdown selection change
  onRegionSelectionChange(region: string | null): void {
    this.selectedRegion = region;
    this.applyFilters();
  }

  // Method to apply filters
  private applyFilters(): void {
    if (!this.flags) {
      this.filteredFlags = [];
      return;
    }

    this.filteredFlags = this.flags.filter((flag: any) => {
      const matchesSearch =
        !this.value ||
        flag.name.common.toLowerCase().includes(this.value.toLowerCase());

      const matchesRegion =
        !this.selectedRegion || flag.region === this.selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }

  handleDarkThemeToggle(darkThemeEnabled: boolean) {
    this.darkThemeEnabled = darkThemeEnabled;
  }
}
