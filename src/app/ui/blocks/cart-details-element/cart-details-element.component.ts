import { Component, Input } from '@angular/core';
import { IBook } from '../../../core/models/shared/book.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cart-details-element',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './cart-details-element.component.html',
  styleUrl: './cart-details-element.component.css',
})
export class CartDetailsElementComponent {
  @Input() book: IBook;
}
