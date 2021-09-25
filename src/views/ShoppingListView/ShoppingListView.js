import React from 'react';
import { Link } from 'react-router-dom';

import StyledLink from '../../components/atoms/StyledLink/StyledLink';
import Heading from '../../components/atoms/Heading/Heading';
import RecipesList from '../../components/organisms/RecipesList/RecipesList';
import IngredientList from '../../components/organisms/IngredientList/IngredientList';

import SubpageTemplate from '../../templates/SubpageTemplate';

import useChangeShoppingList from '../../hooks/useChangeShoppingList';
import useFetchItems from '../../hooks/useFetchItems';

const ShoppingListView = () => {
  const [shoppingList] = useChangeShoppingList();
  const recipes = useFetchItems('recipes');

  const filteredRecipes =
    recipes && recipes.filter(recipe => shoppingList.recipes.includes(recipe.id));

  return (
    <SubpageTemplate>
      <Heading thin>your shopping list</Heading>

      {filteredRecipes && filteredRecipes.length > 0 ? (
        <>
          <Heading small>Recipes list</Heading>
          <RecipesList recipes={filteredRecipes} />
          {shoppingList && shoppingList.ingredients && (
            <IngredientList ingredients={shoppingList.ingredients} />
          )}
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
