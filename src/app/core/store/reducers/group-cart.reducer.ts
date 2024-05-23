import { createReducer, on } from '@ngrx/store';
import { IGroupCartState } from '../state-interfaces/IGroupCart.state';
import * as GroupCartActions from '../actions/group-cart.actions';
import { IBookForCart } from '../../models/shared/book-for-cart.model';
import { IBook } from '../../models/shared/book.model';

export const initialState: IGroupCartState = {
  carts: [],
};

export const groupCartReducer = createReducer(
  initialState,
  on(GroupCartActions.addBook, addBook),
  on(GroupCartActions.removeBook, removeBook),
  on(GroupCartActions.addOneBook, addOneBook),
  on(GroupCartActions.removeOneBook, removeOneBook)
);

function addBook(
  state: IGroupCartState,
  action: { book: IBook; cartIndex: number }
): IGroupCartState {
  const carts = [...state.carts];
  const cart = carts[action.cartIndex];
  const book: IBookForCart = {
    ...action.book,
    quantity: 1,
    totalPrice: action.book.price,
  };
  const newCart = { ...cart, books: [...cart.books, book] };

  carts[action.cartIndex] = newCart;
  return { ...state, carts };
}

function removeBook(
  state: IGroupCartState,
  action: { bookId: string; cartIndex: number }
): IGroupCartState {
  const carts = [...state.carts];
  const cart = carts[action.cartIndex];
  const newCart = {
    ...cart,
    books: cart.books.filter((b) => b.id !== action.bookId),
  };

  carts[action.cartIndex] = newCart;
  return { ...state, carts };
}

function addOneBook(
  state: IGroupCartState,
  action: { bookId: string; cartIndex: number }
): IGroupCartState {
  const carts = [...state.carts];
  const cart = carts[action.cartIndex];
  const newBooks = cart.books.map((b) => {
    if (b.id === action.bookId) {
      return {
        ...b,
        quantity: b.quantity + 1,
        totalPrice: b.totalPrice + b.price,
      };
    }
    return b;
  });
  const newCart = { ...cart, books: newBooks };

  carts[action.cartIndex] = newCart;
  return { ...state, carts };
}

function removeOneBook(
  state: IGroupCartState,
  action: { bookId: string; cartIndex: number }
): IGroupCartState {
  const carts = [...state.carts];
  const cart = carts[action.cartIndex];
  const newBooks = cart.books.map((b) => {
    if (b.id === action.bookId) {
      return {
        ...b,
        quantity: b.quantity - 1,
        totalPrice: b.totalPrice - b.price,
      };
    }
    return b;
  });
  const newCart = { ...cart, books: newBooks };

  carts[action.cartIndex] = newCart;
  return { ...state, carts };
}
