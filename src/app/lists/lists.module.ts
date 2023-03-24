import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SharedModule } from '../shared/shared.module';
import { ListsComponent } from './components/lists/lists.component';
// import { SingleQuestionComponent } from './components/single-question/single-question.component';
// import { OpenQuestionComponent } from './components/open-question/open-question.component';
// import { MultipleQuestionComponent } from './components/multiple-question/multiple-question.component';
import { QuestionControlsComponent } from './components/question-controls/question-controls.component';
import { QuestionComponent } from './components/question/question.component';

const routes = [
  {
    path: '',
    component: ListsComponent,
  },
];

@NgModule({
  declarations: [
    ListsComponent,
    // SingleQuestionComponent,
    // OpenQuestionComponent,
    // MultipleQuestionComponent,
    QuestionControlsComponent,
    QuestionComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatRadioModule,
    MatCheckboxModule,
  ],
})
export class ListsModule {}
