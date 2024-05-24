import { IBook } from '../../models/shared/book.model';

export interface IBooksState {
  bookList: IBook[];
  loading: boolean;
  error: string;
}
