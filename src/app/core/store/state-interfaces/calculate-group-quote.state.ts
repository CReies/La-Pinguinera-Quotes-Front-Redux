import { ICalculateGroupQuoteResponse } from '../../models/api/response/calculate-quote/calculate-group-quote-response.model';

export interface ICalculateGroupQuoteState {
  quoteResult: ICalculateGroupQuoteResponse;
  customerRegisterDate?: Date;
  loading: boolean;
  error: string;
}
