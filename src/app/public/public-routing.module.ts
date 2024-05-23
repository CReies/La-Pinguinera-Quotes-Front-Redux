import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '../ui/layouts/layout-main/layout-main.component';
import { BookListContainerComponent } from '../containers/book-list-container/book-list-container.component';
import { GroupCartContainerComponent } from '../containers/group-cart-container/group-cart-container.component';
import { getQuoteAggregateResolver } from './resolvers/get-quote-aggregate.resolver';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      { path: '', component: BookListContainerComponent, outlet: 'main' },
      { path: '', component: GroupCartContainerComponent, outlet: 'aside' },
    ],
    resolve: {
      getQuoteAggregate: getQuoteAggregateResolver,
    },
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
