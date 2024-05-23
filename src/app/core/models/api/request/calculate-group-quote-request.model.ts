import { IBookIdWithQuantity } from "../../book-id-with-quantity.model"

export interface ICalculateGroupQuoteRequest {
	AggregateId: string
	Group: IBookIdWithQuantity[][]
	CustomerRegisterDate: Date
}
