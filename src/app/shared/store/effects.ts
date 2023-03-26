import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { DataService } from '../service/data-service.service';
import { questionsActions } from './actions';

@Injectable()
export class QuestionsEffects {
  loadQuestions$ = createEffect(() => {
    return this.actions.pipe(
      ofType(questionsActions.loadQuestions),
      mergeMap(() => {
        return this.dataService.getAllQuestions().pipe(
          map((questions) => questionsActions.loadedQuestions({ questions })),
          catchError((error) => {
            return of(questionsActions.loadedError(error));
          }),
        );
      }),
    );
  });
  deleteQuestion$ = createEffect(() => {
    return this.actions.pipe(
      ofType(questionsActions.deleteQuestion),
      mergeMap(({ id }) => {
        return this.dataService.deleteQuestion(id).pipe(
          map((id) => questionsActions.deletedQuestion({ id })),
          catchError((error) => {
            return of(questionsActions.loadedError(error));
          }),
        );
      }),
    );
  });
  revertQuestion$ = createEffect(() => {
    return this.actions.pipe(
      ofType(questionsActions.revertQuestion),
      mergeMap(({ id }) => {
        return this.dataService.revertQuestion(id).pipe(
          map((question) => questionsActions.updatedQuestion({ question })),
          catchError((error) => {
            return of(questionsActions.loadedError(error));
          }),
        );
      }),
    );
  });
  answerQuestion$ = createEffect(() => {
    return this.actions.pipe(
      ofType(questionsActions.answerQuestion),
      mergeMap(({ question }) => {
        return this.dataService.answerQuestion(question).pipe(
          map((question) => questionsActions.updatedQuestion({ question })),
          catchError((error) => {
            return of(questionsActions.loadedError(error));
          }),
        );
      }),
    );
  });
  updateQuestion$ = createEffect(() => {
    return this.actions.pipe(
      ofType(questionsActions.updateQuestion),
      mergeMap(({ question }) => {
        return this.dataService.updateQuestion(question).pipe(
          map((question) => questionsActions.updatedQuestion({ question })),
          catchError((error) => {
            return of(questionsActions.loadedError(error));
          }),
        );
      }),
    );
  });
  constructor(private actions: Actions, private dataService: DataService) {}
}
