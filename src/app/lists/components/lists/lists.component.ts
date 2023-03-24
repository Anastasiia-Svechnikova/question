import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  selectAnsweredQuestions,
  selectNotAnsweredQuestions,
} from '../../../shared/store/selectors';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent {
  answeredQuestions$ = this.store.select(selectAnsweredQuestions);
  notAnsweredQuestions$ = this.store.select(selectNotAnsweredQuestions);
  constructor(private store: Store) {}
}
