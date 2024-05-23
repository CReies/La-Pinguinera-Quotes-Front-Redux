import { BookType } from '../enums/bookType';

export interface IBookDetails {
  id: string;
  title: string;
  author: string;
  basePrice: number;
  finalPrice: number;
  type: BookType;
  discount: number;
  increase: number;
}
