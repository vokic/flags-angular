import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';

@Component({
  selector: 'app-flag-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './flag-card.component.html',
  styleUrl: './flag-card.component.css',
})
export class FlagCardComponent {
  constructor(public dialog: MatDialog) {}

  @Input() darkThemeEnabled?: boolean;

  @Input() name?: string;
  @Input() capital?: string[];
  @Input() population?: number;
  @Input() region?: string;
  @Input() img?: string;
  @Input() link?: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
