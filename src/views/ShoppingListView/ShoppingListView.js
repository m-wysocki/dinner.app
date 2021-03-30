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
