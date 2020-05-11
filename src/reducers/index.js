import { ADD_SUCCESS, FETCH_SUCCESS, REMOVE_SUCCESS } from '../actions';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_SUCCESS:
      return {
        ...state,
        // [recipes]: [...state[recipes].filter(item => item.id !== 23) ]
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
        ],
      };
    case ADD_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemsType]: [...action.payload.items],
      };
    default:
      return state;
  }
};

export default rootReducer;
