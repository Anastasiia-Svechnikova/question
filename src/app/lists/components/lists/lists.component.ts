import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { questionsActions } from 'src/app/shared/store/actions';

import {
  selectAnsweredQuestions,
  selectNotAnsweredQuestions,
} from '../../../shared/store/selectors';

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
    this.store.dispatch(questionsActions.loadQuestions());
  }
}
