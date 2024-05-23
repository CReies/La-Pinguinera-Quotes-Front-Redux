import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '../ui/layouts/layout-main/layout-main.component';
import { FormComponent } from '../ui/forms/form/form.component';

const routes: Routes = [
  {
    path: 'example',
    component: LayoutMainComponent,
    children: [{ path: '', component: FormComponent, outlet: 'form' }],
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
