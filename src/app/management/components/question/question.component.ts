import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, takeUntil } from 'rxjs';

import { IQuestion } from 'src/app/shared/models/models';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { managementActions } from '../../store/actions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent extends UnSubscriberComponent {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private store: Store,
  ) {
    super();
  }
  @Input() question!: IQuestion;

  onEdit(id: string): void {
    this.router.navigate([`/edit/${id}`]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: { question: this.question.text },
    });
    dialogRef
      .afterClosed()
      .pipe(
        takeUntil(this.destroyed$),
        filter((result) => result),
      )
      .subscribe(() => {
        this.store.dispatch(
          managementActions.deleteQuestion({ id: this.question.id }),
        );
      });
  }
}
