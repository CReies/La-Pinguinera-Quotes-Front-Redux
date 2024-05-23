import { BookType } from '../enums/bookType';

export interface IBook {
  id: string;
  title: string;
  author: string;
  price: number;
  type: BookType;
}
