import { IBookDetails } from '../../../shared/book-details.model';

export interface ICalculateGroupQuoteResponse {
  groups: IGroup[];
  totalFinalPrice: number;
  totalBasePrice: number;
  totalDiscount: number;
  totalIncrease: number;
}

interface IGroup {
  books: IBookDetails[];
  totalPrice: number;
  totalBasePrice: number;
  totalDiscount: number;
  totalIncrease: number;
}
