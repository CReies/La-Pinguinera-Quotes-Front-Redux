import { environment } from '../../../environments/environment.development';

export const URL_RESOURCES = {
  quote: {
    get: `${environment.apiUrl}/secret`,
    create: `${environment.apiUrl}/secret`,
  },
  calculateQuote: {
    group: `${environment.apiUrl}/quote/group`,
  },
  books: {
    getAll: `${environment.apiUrl}/books`,
  },
};
