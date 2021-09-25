import React from 'react';

export const initialShoppingListContext = {
  recipes: [],
  ingredients: {},
};
const ShoppingListContext = React.createContext(initialShoppingListContext);

export default ShoppingListContext;
