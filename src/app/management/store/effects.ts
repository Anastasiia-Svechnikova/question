import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { DataService } from 'src/app/shared/service/data-service.service';
import { managementActions } from './actions';

@Injectable()
export class ManagementEffects {
  loadQuestions$ = createEffect(() => {
    return this.actions.pipe(
      ofType(managementActions.loadQuestions),
      mergeMap(() => {
        return this.dataService.getAllQuestions().pipe(
          map((questions) => managementActions.loadedQuestions({ questions })),
          catchError((error) => {
            return of(managementActions.managementError(error));
          }),
        );
      }),
    );
  });

  deleteQuestion$ = createEffect(() => {
    return this.actions.pipe(
      ofType(managementActions.deleteQuestion),
      mergeMap(({ id }) => {
        return this.dataService.deleteQuestion(id).pipe(
          map((id) => managementActions.deletedQuestion({ id })),
          catchError((error) => {
            return of(managementActions.managementError(error));
          }),
        );
      }),
    );
  });

  constructor(private actions: Actions, private dataService: DataService) {}
}
