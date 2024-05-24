import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '../ui/layouts/layout-main/layout-main.component';
import { GroupCartContainerComponent } from '../containers/group-cart-container/group-cart-container.component';
import { getQuoteAggregateResolver } from './resolvers/get-quote-aggregate.resolver';
import { BookCardsContainerComponent } from '../containers/book-cards-container/book-cards-container.component';
import { GroupQuoteInvoiceModalContainerComponent } from '../containers/group-quote-invoice-modal-container/group-quote-invoice-modal-container.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      { path: '', component: BookCardsContainerComponent, outlet: 'main' },
      { path: '', component: GroupCartContainerComponent, outlet: 'aside' },
      {
        path: '',
        component: GroupQuoteInvoiceModalContainerComponent,
        outlet: 'modal',
      },
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
