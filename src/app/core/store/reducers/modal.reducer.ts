import { createReducer, on } from '@ngrx/store';
import * as ModalActions from '../actions/modal.actions';
import { IModalState } from '../state-interfaces/modal.state';

export const initialState: IModalState = {
  groupQuoteModal: {
    visible: false,
  },
};

export const modalReducer = createReducer(
  initialState,
  on(ModalActions.setGroupQuoteModalVisibility, setGroupQuoteModalVisibility)
);

function setGroupQuoteModalVisibility(
  state: IModalState,
  action: { visible: boolean }
) {
  return { ...state, groupQuoteModal: { visible: action.visible } };
}
