import { IBookIdWithQuantity } from '../../../shared/book-id-with-quantity.model';

export interface ICalculateGroupQuoteRequest {
  AggregateId: string;
  Group: IBookIdWithQuantity[][];
  CustomerRegisterDate: string;
}
