import { LOAD_ITEMS } from '../actions/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return action.payload.items || []
    default:
      return state;
  }
};
