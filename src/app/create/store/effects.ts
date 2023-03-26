import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataService } from 'src/app/shared/service/data-service.service';
import { createActions } from './actions';

@Injectable()
export class CreateAndEditEffects {
  addQuestion$ = createEffect(() => {
    return this.actions.pipe(
      ofType(createActions.addQuestion),
      mergeMap(({ question }) => {
        return this.dataService.addQuestion(question).pipe(
          map(() => createActions.addedQuestion()),
          catchError((error) => {
            return of(createActions.addError(error));
          }),
        );
      }),
    );
  });

  editQuestion$ = createEffect(() => {
    return this.actions.pipe(
      ofType(createActions.editQuestion),
      mergeMap(({ question }) => {
        return this.dataService.updateQuestion(question).pipe(
          map(() => createActions.editedQuestion()),
          catchError((error) => {
            return of(createActions.editError(error));
          }),
        );
      }),
    );
  });
  constructor(private actions: Actions, private dataService: DataService) {}
}
