import { IBookForCart } from '../../models/shared/book-for-cart.model';

export interface IGroupCartState {
  carts: ICart[];
}

export interface ICart {
  id: number;
  books: IBookForCart[];
  active: boolean;
}
