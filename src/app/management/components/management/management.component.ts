import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { questionsActions } from 'src/app/shared/store/actions';
import { selectAllQuestions } from 'src/app/shared/store/selectors';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
})
export class ManagementComponent implements OnInit {
  questions$ = this.store.select(selectAllQuestions);

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(questionsActions.loadQuestions());
  }
  onNew(): void {
    this.router.navigate(['new']);
  }
}
