import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/shared/models/models';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  constructor(private router: Router, public dialog: MatDialog) {}
  @Input() question!: Question;
  onEdit(id: string): void {
    this.router.navigate([`/edit/${id}`]);
  }
  openDialog(): void {
    this.dialog.open(DeleteModalComponent, {
      data: {
        id: this.question.id,
      },
    });
  }
}
