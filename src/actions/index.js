import { db } from '../services/firebase';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const fetchItems = itemsType => async dispatch => {
  dispatch({ type: FETCH_REQUEST });
  return db
    .collection(itemsType)
    .get()
    .then(querySnapshot => {
      const items = [];
      console.log(querySnapshot);
      querySnapshot.forEach(doc => {
        items.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return items;
    })
    .then(items => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          itemsType,
          items,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};
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
