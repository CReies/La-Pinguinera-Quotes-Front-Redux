import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '../ui/layouts/layout-main/layout-main.component';
import { BookListComponent } from '../ui/blocks/book-list/book-list.component';
import { CalculateGroupComponent } from '../ui/blocks/calculate-group/calculate-group.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      { path: '', component: BookListComponent, outlet: 'main' },
      { path: '', component: CalculateGroupComponent, outlet: 'aside' },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
