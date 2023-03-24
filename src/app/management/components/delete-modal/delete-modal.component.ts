import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { questionsActions } from 'src/app/shared/store/actions';

interface IData {
  id: string;
}

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IData,
    private store: Store,
  ) {}

  onDelete(id: string): void {
    this.store.dispatch(questionsActions.deleteQuestion({ id }));
  }
}
