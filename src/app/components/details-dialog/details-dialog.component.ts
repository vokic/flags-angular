import { Component, Inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlagsService } from '../../services/flags.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    CommonModule,
  ],
  templateUrl: './details-dialog.component.html',
  styleUrl: './details-dialog.component.css',
})
export class DetailsDialogComponent {
  @Input() name?: string;
  country: any;

  constructor(
    private flagService: FlagsService,
    public dialogRef: MatDialogRef<DetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.getCountryDetails(this.data.name);
  }

  getCountryDetails(name: string): void {
    this.flagService.getCountryDetails(name).subscribe((country) => {
      this.country = country;
      console.log('Country', this.country);
    });
  }

  getCurrencyNames(): string[] {
    const currenciesObj: any = this.country[0].currencies;
    if (currenciesObj) {
      return Object.values(currenciesObj).map((currency: any) => currency.name);
    } else {
      return [];
    }
  }

  getLanguages(): string[] {
    return this.country[0].languages
      ? Object.values(this.country[0].languages)
      : [];
  }
}
