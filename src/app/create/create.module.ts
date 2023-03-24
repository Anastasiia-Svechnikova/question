import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

import { CreateOptionsControlComponent } from './components/create-options-control/create-options-control.component';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './components/create/create.component';

const routes = [
  {
    path: '',
    component: CreateComponent,
  },
];

@NgModule({
  declarations: [CreateComponent, CreateOptionsControlComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatIconModule,
    MatRadioModule,
  ],
})
export class CreateModule {}
