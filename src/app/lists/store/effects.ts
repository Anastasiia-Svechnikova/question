import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { DataService } from 'src/app/shared/service/data-service.service';
import { listsActions } from './actions';

@Injectable()
export class ListsEffects {
  revertQuestion$ = createEffect(() => {
    return this.actions.pipe(
      ofType(listsActions.revertQuestion),
      mergeMap(({ id }) => {
        return this.dataService.revertQuestion(id).pipe(
          map((question) => listsActions.updatedAnswer({ question })),
          catchError((error) => {
            return of(listsActions.listsError(error));
          }),
        );
      }),
    );
  });

  answerQuestion$ = createEffect(() => {
    return this.actions.pipe(
      ofType(listsActions.answerQuestion),
      mergeMap(({ question }) => {
        return this.dataService.answerQuestion(question).pipe(
          map((question) => listsActions.updatedAnswer({ question })),
          catchError((error) => {
            return of(listsActions.listsError(error));
          }),
        );
      }),
    );
  });

  loadQuestions$ = createEffect(() => {
    return this.actions.pipe(
      ofType(listsActions.loadQuestions),
      mergeMap(() => {
        return this.dataService.getAllQuestions().pipe(
          map((questions) => listsActions.loadedQuestions({ questions })),
          catchError((error) => {
            return of(listsActions.listsError(error));
          }),
        );
      }),
    );
  });

  constructor(private actions: Actions, private dataService: DataService) {}
}
