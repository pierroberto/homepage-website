import * as types from '../actions/types';

const defaultState = {
  dropdown: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.TOGGLE_DROPDOWN:
      return {
        ...state,
        dropdown: !state.dropdown,
      };
    default:
      return state;
  }
};
