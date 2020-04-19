import { db } from '../services/firebase';

export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const removeItem = (itemType, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      id,
    },
  };
};
export const addItem = (itemType, itemContent) => async dispatch => {
  dispatch({ type: ADD_REQUEST });
  return db
    .collection(itemType)
    .add(itemContent)
    .then(({ id }) => {
      return db
        .collection(itemType)
        .doc(id)
        .get();
    })
    .then(doc => {
      dispatch({
        type: ADD_SUCCESS,
        payload: {
          itemType,
          item: {
            id: doc.id,
            ...doc.data(),
          },
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FAILURE });
    });
};
