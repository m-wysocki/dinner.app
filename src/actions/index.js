export const removeItem = (itemType, _id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      _id,
    },
  };
};
