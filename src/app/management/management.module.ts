import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { QuestionComponent } from './components/question/question.component';
import { MatDialogModule } from '@angular/material/dialog';

import { ManagementComponent } from './components/management/management.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

const routes = [
  {
    path: '',
    component: ManagementComponent,
  },
];

@NgModule({
  declarations: [ManagementComponent, QuestionComponent, DeleteModalComponent],
  imports: [RouterModule.forChild(routes), SharedModule, MatDialogModule],
})
export class ManagementModule {}
