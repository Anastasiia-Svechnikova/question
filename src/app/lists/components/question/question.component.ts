import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IQuestion, QuestionTypes } from 'src/app/shared/models/models';
import { FormGenerator } from '../../helpers/form-generator';
import { listsActions } from '../../store/actions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  @Input() question!: IQuestion;
  questionTypes = QuestionTypes;
  questionForm!: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.questionForm =
      this.type === QuestionTypes.multiple
        ? FormGenerator.multiple(this.question)
        : FormGenerator.single(this.question);
    if (this.question.answered) {
      this.questionForm.disable();
    }
  }

  onSubmit(): void {
    const question =
      this.type === QuestionTypes.multiple
        ? this.generateMultipleAnswer()
        : this.generateSingleAnswer();
    this.store.dispatch(listsActions.answerQuestion({ question }));
  }

  onRevert(): void {
    this.store.dispatch(listsActions.revertQuestion({ id: this.question.id }));
  }

  get type(): string {
    return this.question.type;
  }

  private generateSingleAnswer(): IQuestion {
    const answer = [this.questionForm.get('answer')?.value];
    return {
      ...this.question,
      answered: true,
      answer,
    };
  }
  private generateMultipleAnswer(): IQuestion {
    const answer = Object.entries(this.questionForm.value)
      .filter((item) => item[1])
      .map((item) => item[0]);
    return {
      ...this.question,
      answered: true,
      answer,
    };
  }
}
