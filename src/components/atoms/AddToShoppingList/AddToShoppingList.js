import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import useChangeShoppingList from '../../../hooks/useChangeShoppingList';

const AddToShoppingList = ({ recipeId }) => {
  const [shoppingList, changeShoppingList] = useChangeShoppingList();
  const { recipes } = shoppingList;

  return (
    <Button
      small
      secondary
      remove={recipes.includes(recipeId)}
      add={!recipes.includes(recipeId)}
      onClick={() => changeShoppingList(recipeId)}
    >
      {recipes.includes(recipeId) ? '📔 remove from list' : '📔 add to list'}
    </Button>
  );
};

export default AddToShoppingList;

AddToShoppingList.propTypes = {
  recipeId: PropTypes.string.isRequired,
};
