import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ShoppingListContext from '../../../context/ShoppingListContext';
import Button from '../Button/Button';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

const AddToShoppingList = ({ recipeId }) => {
  const [shoppingList, setShoppingList] = useContext(ShoppingListContext);
  const [, setShoppingListStorage] = useLocalStorage('shoppingList', shoppingList);

  const handleChangeShoppingList = () => {
    if (!shoppingList.includes(recipeId)) {
      setShoppingList([...shoppingList, recipeId]);
      toast.success('👌 Ingredients were added to your shopping list');
    } else {
      setShoppingList(shoppingList.filter(id => id !== recipeId));
      toast.error('🤷‍♂️ Ingredients were removed from your shopping list');
    }
  };

  useEffect(() => {
    setShoppingListStorage(shoppingList);
  }, [shoppingList, setShoppingListStorage]);

  return (
    <Button
      small
      secondary
      remove={shoppingList.includes(recipeId)}
      add={!shoppingList.includes(recipeId)}
      onClick={handleChangeShoppingList}
    >
      {shoppingList.includes(recipeId) ? '📔 remove from list' : '📔 add to list'}
    </Button>
  );
};

export default AddToShoppingList;

AddToShoppingList.propTypes = {
  recipeId: PropTypes.string.isRequired,
};
