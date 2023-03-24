import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ISingleQuestion } from 'src/app/shared/models/models';
import { questionsActions } from 'src/app/shared/store/actions';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css'],
})
export class SingleQuestionComponent implements OnInit {
  @Input() question!: ISingleQuestion;
  questionForm!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      answer: [this.question.answer, Validators.required],
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
