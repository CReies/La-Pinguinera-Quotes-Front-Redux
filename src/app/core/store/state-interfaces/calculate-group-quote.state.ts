import { ICalculateGroupQuoteResponse } from '../../models/api/response/calculate-quote/calculate-group-quote-response.model';

export interface ICalculateGroupQuoteState {
  quoteResult: ICalculateGroupQuoteResponse;
  loading: boolean;
  error: string;
}
