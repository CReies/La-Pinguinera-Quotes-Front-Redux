import { Component, Input } from '@angular/core';
import { CartDetailsElementComponent } from '../cart-details-element/cart-details-element.component';
import { IBook } from '../../../core/models/shared/book.model';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [CartDetailsElementComponent],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css',
})
export class CartDetailsComponent {
  @Input() books: IBook[];
}
