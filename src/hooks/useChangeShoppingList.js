import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import ShoppingListContext from '../context/ShoppingListContext';
import { useLocalStorage } from './useLocalStorage';
import useFetchItems from './useFetchItems';

const useChangeShoppingList = () => {
  const [shoppingList, setShoppingList] = useContext(ShoppingListContext);
  const [, setShoppingListStorage] = useLocalStorage('shoppingList', shoppingList);
  const allRecipes = useFetchItems('recipes');

  function prepareIngredients(recipeId, changeType) {
    const { ingredients } = shoppingList;
    const newIngredients = allRecipes.filter(recipe => recipe.id === recipeId)[0].ingredients;
    const allIngredients = { ...ingredients };

    newIngredients.forEach(newIngredient => {
      if (newIngredient.id in allIngredients) {
        const currentAmount = parseFloat(allIngredients[newIngredient.id].amount);
        const newAmount = parseFloat(newIngredient.amount);
        if (changeType === 'add') {
          allIngredients[newIngredient.id].amount = currentAmount + newAmount;
        } else if (changeType === 'delete') {
          if (currentAmount > newAmount) {
            allIngredients[newIngredient.id].amount = currentAmount - newAmount;
          } else {
            delete allIngredients[newIngredient.id];
          }
        }
      } else {
        allIngredients[newIngredient.id] = newIngredient;
      }
    });

    return allIngredients;
  }

  function changeShoppingList(recipeId) {
    const { recipes } = shoppingList;

    if (!recipes.includes(recipeId)) {
      const preparedIngredients = prepareIngredients(recipeId, 'add');
      setShoppingList({
        recipes: [...recipes, recipeId],
        ingredients: { ...preparedIngredients },
      });
      toast.success('👌 Ingredients were added to your shopping list');
    } else {
      const preparedIngredients = prepareIngredients(recipeId, 'delete');
      setShoppingList({
        recipes: recipes.filter(id => id !== recipeId),
        ingredients: { ...preparedIngredients },
      });
      toast.error('🤷‍♂️ Ingredients were removed from your shopping list');
    }
  }

  function toggleToBuyIngredient(ingredientId) {
    const { ingredients } = shoppingList;
    ingredients[ingredientId].toBuy = !ingredients[ingredientId].toBuy;
    setShoppingList({
      ...shoppingList,
      ingredients,
    });
  }

  function clearShoppingList() {
    setShoppingList({
      recipes: [],
      ingredients: {},
    });
    toast.error('🤷‍♂️ Shopping list has been cleared');
  }

  useEffect(() => {
    setShoppingListStorage(shoppingList);
  }, [shoppingList, setShoppingListStorage]);

  return [shoppingList, changeShoppingList, toggleToBuyIngredient, clearShoppingList];
};

export default useChangeShoppingList;
