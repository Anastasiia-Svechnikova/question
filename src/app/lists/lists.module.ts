import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SharedModule } from '../shared/shared.module';
import { ListsComponent } from './components/lists/lists.component';
import { QuestionComponent } from './components/question/question.component';

const routes = [
  {
    path: '',
    component: ListsComponent,
  },
];

@NgModule({
  declarations: [ListsComponent, QuestionComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatRadioModule,
    MatCheckboxModule,
  ],
})
export class ListsModule {}
