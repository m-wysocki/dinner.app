import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../components/atoms/Heading/Heading';
import SubpageTemplate from '../../templates/SubpageTemplate';
import ShoppingListContext from '../../context/ShoppingListContext';
import useFetchItems from '../../hooks/useFetchItems';
import RecipesList from '../../components/organisms/RecipesList/RecipesList';
import StyledLink from '../../components/atoms/StyledLink/StyledLink';
import IngredientList from '../../components/organisms/IngredientList/IngredientList';

const ShoppingListView = () => {
  const [shoppingList] = useContext(ShoppingListContext);
  const recipes = useFetchItems('recipes');
  const ingredients = useFetchItems('ingredients');
  const shopCategories = useFetchItems('shopCategories');
  const ingredientList = [];
  let ingredientListReduced = [];
  let finalIngredientList = [];

  const filteredRecipes = recipes && recipes.filter(recipe => shoppingList.includes(recipe.id));

  if (shoppingList && shoppingList.length > 0 && recipes && ingredients && shopCategories) {
    filteredRecipes.forEach(recipe => {
      ingredientList.push(...recipe.ingredients);
    });

    ingredientListReduced = Array.from(
      ingredientList
        .reduce((acc, { id, amount, ...r }) => {
          const current = acc.get(id) || { ...r, id, amount: 0 };
          const { shopCategoryId } = ingredients.find(item => item.id === id) || null;
          const shopCategoryName = shopCategories.find(item => item.id === shopCategoryId);
          return acc.set(id, {
            ...current,
            shopCategoryId,
            shopCategoryName: shopCategoryName.name,
            amount: current.amount + parseFloat(amount),
          });
        }, new Map())
        .values(),
    );
    const finalIngredientMap = new Map();
    shopCategories.forEach(c => {
      finalIngredientMap.set(
        c.name,
        ingredientListReduced.filter(i => i.shopCategoryId === c.id),
      );
    });
    finalIngredientList = Array.from(finalIngredientMap);
  }
  return (
    <SubpageTemplate>
      <Heading thin>your shopping list</Heading>

      {filteredRecipes && filteredRecipes.length > 0 ? (
        <>
          <Heading small>Recipes list</Heading>
          <RecipesList recipes={filteredRecipes} />
          <IngredientList finalIngredientList={finalIngredientList} />
        </>
      ) : (
        <p>
          There&apos;s no ingredients.{' '}
          <StyledLink as={Link} to="/recipes">
            Add some recipes to the list.
          </StyledLink>
        </p>
      )}
    </SubpageTemplate>
  );
};

export default ShoppingListView;
