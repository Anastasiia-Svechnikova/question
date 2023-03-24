import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./management/management.module').then((m) => m.ManagementModule),
  },
  {
    path: 'lists',
    loadChildren: () =>
      import('./lists/lists.module').then((m) => m.ListsModule),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./create/create.module').then((m) => m.CreateModule),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./create/create.module').then((m) => m.CreateModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
