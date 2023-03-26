import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { IEmptyQuestion, Mode, IQuestion } from 'src/app/shared/models/models';
// import { questionsActions } from 'src/app/shared/store/actions';
// import { selectQuestionById } from 'src/app/shared/store/selectors';
import {
  MAX_LENGTH_OPEN_QUESTION,
  QUESTION_TYPES,
  QUESTION_WITH_OPTIONS_TYPES,
} from '../../../shared/constants/constants';
import { generateQuestion } from '../../helpers/generate-question';
import { updateQuestion } from '../../helpers/update-question';
import { createActions } from '../../store/actions';
import { selectQuestionById } from '../../store/selectors';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent extends UnSubscriberComponent implements OnInit {
  types = QUESTION_TYPES;
  form!: FormGroup;
  mode = this.router.routerState.snapshot.url.split('/')[1];
  questionData!: IQuestion | IEmptyQuestion;
  storedQuestion$ = this.store.select(selectQuestionById);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
  ) {
    super();
  }

  ngOnInit(): void {
    this.storedQuestion$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((question) => (this.questionData = question));

    this.form = this.fb.group({
      type: [this.questionData.type, Validators.required],
      text: [
        this.questionData.text,
        [Validators.required, Validators.maxLength(MAX_LENGTH_OPEN_QUESTION)],
      ],
    });
    this.manageOptionsControl(this.type.value);
    this.type.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((type: string) => {
        this.manageOptionsControl(type);
      });
  }

  manageOptionsControl(type: string): void {
    if (QUESTION_WITH_OPTIONS_TYPES.includes(type)) {
      this.addOptionsControl();
    } else {
      this.form.removeControl('options');
    }
  }

  addOptionsControl(): void {
    this.form.addControl(
      'options',
      this.fb.control(this.questionData.options, [
        Validators.required,
        this.emptyValidator(),
      ]),
    );
  }

  get type(): FormControl {
    return this.form.get('type') as FormControl;
  }

  onSubmit(): void {
    if (this.mode === Mode.new) {
      const question = generateQuestion(this.form);
      this.store.dispatch(createActions.addQuestion({ question }));
    } else {
      const question = updateQuestion(this.form, this.questionData);
      this.store.dispatch(createActions.editQuestion({ question }));
    }
    this.router.navigate(['/']);
  }

  emptyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = control.value.includes('');
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
}
