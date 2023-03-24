import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { MAX_LENGTH_OPEN_QUESTION } from 'src/app/shared/constants/constants';
import { IOpenQuestion } from 'src/app/shared/models/models';
import { questionsActions } from 'src/app/shared/store/actions';

@Component({
  selector: 'app-open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.css'],
})
export class OpenQuestionComponent implements OnInit {
  @Input() question!: IOpenQuestion;
  questionForm!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      answer: [
        this.question.answer,
        [Validators.required, Validators.maxLength(MAX_LENGTH_OPEN_QUESTION)],
      ],
    });
    if (this.question.answered) {
      this.questionForm.disable();
    }
  }
  onSubmit(): void {
    const question = {
      ...this.question,
      answered: true,
      ...this.questionForm.value,
    };
    this.store.dispatch(questionsActions.answerQuestion({ question }));
  }
}
