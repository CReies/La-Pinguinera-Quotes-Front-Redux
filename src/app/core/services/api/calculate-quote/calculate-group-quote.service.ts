import { Injectable } from '@angular/core';
import { HttpService } from '../../generals/http.service';

@Injectable({ providedIn: 'root' })
export class CalculateGroupQuote {
	constructor(
		private readonly httpService: HttpService
		private readonly reqMapper
		private readonly resMapper
	) {
		
	}
}
