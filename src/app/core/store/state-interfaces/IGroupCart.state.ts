import { IBookForCart } from '../../models/shared/book-for-cart.model';

export interface IGroupCartState {
  carts: ICart[];
}

interface ICart {
  books: IBookForCart[];
}
