import { IBookDetails } from '../../../shared/book-details.model';

export interface ICalculateGroupQuoteRequest {
  groups: IGroup[];
  totalFinalPrice: number;
  totalBasePrice: number;
  totalDiscount: number;
  totalIncrease: number;
}

interface IGroup {
  books: IBookDetails[];
  totalFinalPrice: number;
  totalBasePrice: number;
  totalDiscount: number;
  totalIncrease: number;
}
