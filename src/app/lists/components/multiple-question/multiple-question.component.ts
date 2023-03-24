import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Store } from '@ngrx/store';

import { IMultipleQuestion } from 'src/app/shared/models/models';
import { questionsActions } from 'src/app/shared/store/actions';
import { generateFormControlForMultipleQuestion } from '../../helpers/generate-form-control-for-multiple-question';

@Component({
  selector: 'app-multiple-question',
  templateUrl: './multiple-question.component.html',
  styleUrls: ['./multiple-question.component.css'],
})
export class MultipleQuestionComponent implements OnInit {
  @Input() question!: IMultipleQuestion;
  questionForm!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    const controls = generateFormControlForMultipleQuestion(this.question);
    this.questionForm = this.fb.group(controls, {
      validators: this.emptyValidator(),
    });
    if (this.question.answered) {
      this.questionForm.disable();
    }
  }

  onSubmit(): void {
    const answer = Object.entries(this.questionForm.value)
      .filter((item) => item[1])
      .map((item) => item[0]);
    const question = {
      ...this.question,
      answered: true,
      answer,
    };
    this.store.dispatch(questionsActions.answerQuestion({ question }));
  }

  emptyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = Object.values(control.value).some((value) => value);
      return isValid ? null : { required: true };
    };
  }
}
