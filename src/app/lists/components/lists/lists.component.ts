import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { listsActions } from '../../store/actions';
import {
  selectAnsweredQuestions,
  selectNotAnsweredQuestions,
} from '../../store/selectors';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  answeredQuestions$ = this.store.select(selectAnsweredQuestions);
  notAnsweredQuestions$ = this.store.select(selectNotAnsweredQuestions);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(listsActions.loadQuestions());
  }
}
