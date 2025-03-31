import { IBook } from './book.model';

export interface IBookForCart extends IBook {
  quantity: number;
  totalPrice: number;
}
