import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Question } from 'src/app/shared/models/models';
import { questionsActions } from 'src/app/shared/store/actions';

@Component({
  selector: 'app-question-controls',
  templateUrl: './question-controls.component.html',
  styleUrls: ['./question-controls.component.css'],
})
export class QuestionControlsComponent {
  @Input() question!: Question;
  constructor(private store: Store) {}
  onRevert(): void {
    this.store.dispatch(
      questionsActions.revertQuestion({ id: this.question.id }),
    );
  }
}
