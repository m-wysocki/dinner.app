export const removeItem = (itemType, _id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      _id,
    },
  };
};
export const addItem = (itemType, itemContent) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      itemContent,
    },
  };
};
