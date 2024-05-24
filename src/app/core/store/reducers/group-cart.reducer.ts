import { createReducer, on } from '@ngrx/store';
import { IGroupCartState } from '../state-interfaces/IGroupCart.state';
import * as GroupCartActions from '../actions/group-cart.actions';
import { IBookForCart } from '../../models/shared/book-for-cart.model';
import { IBook } from '../../models/shared/book.model';

export const initialState: IGroupCartState = {
  carts: [
    { id: 0, active: true, books: [] },
    { id: 1, active: false, books: [] },
    { id: 2, active: false, books: [] },
    { id: 3, active: false, books: [] },
  ],
};

export const groupCartReducer = createReducer(
  initialState,
  on(GroupCartActions.addBook, addBook),
  on(GroupCartActions.removeBook, removeBook),
  on(GroupCartActions.addOneBook, addOneBook),
  on(GroupCartActions.removeOneBook, removeOneBook),
  on(GroupCartActions.changeActiveCart, changeActiveCart)
);

function addBook(
  state: IGroupCartState,
  action: { book: IBook }
): IGroupCartState {
  const carts = [...state.carts];
  const cart = carts.find((c) => c.active);
  const book: IBookForCart = {
    ...action.book,
    quantity: 1,
    totalPrice: action.book.price,
  };
  const newCart = { ...cart, books: [...cart.books, book] };
  const newCarts = carts.map((c) => (c.id === newCart.id ? newCart : c));
  return { ...state, carts: newCarts };
}

function removeBook(
  state: IGroupCartState,
  action: { bookId: string }
): IGroupCartState {
  const carts = [...state.carts];
  const cart = carts.find((c) => c.active);
  const newCart = {
    ...cart,
    books: cart.books.filter((b) => b.id !== action.bookId),
  };

  const newCarts = carts.map((c) => (c.id === newCart.id ? newCart : c));
  return { ...state, carts: newCarts };
}

function addOneBook(
  state: IGroupCartState,
  action: { bookId: string }
): IGroupCartState {
  const carts = [...state.carts];
  const cart = carts.find((c) => c.active);
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
  const newCarts = carts.map((c) => (c.id === newCart.id ? newCart : c));
  return { ...state, carts: newCarts };
}

function removeOneBook(
  state: IGroupCartState,
  action: { bookId: string }
): IGroupCartState {
  const carts = [...state.carts];
  const cart = carts.find((c) => c.active);
  const newBooks = cart.books
    .map((b) => {
      if (b.id === action.bookId) {
        return {
          ...b,
          quantity: b.quantity - 1,
          totalPrice: b.totalPrice - b.price,
        };
      }
      return b;
    })
    .filter((b) => b.quantity > 0);

  const newCart = { ...cart, books: newBooks };
  const newCarts = carts.map((c) => (c.id === newCart.id ? newCart : c));
  return { ...state, carts: newCarts };
}

function changeActiveCart(
  state: IGroupCartState,
  action: { cartId: number }
): IGroupCartState {
  const carts = state.carts.map((c) => ({
    ...c,
    active: c.id === action.cartId,
  }));

  return { ...state, carts };
}
