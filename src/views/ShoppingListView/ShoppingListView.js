import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import StyledLink from '../../components/atoms/StyledLink/StyledLink';
import Heading from '../../components/atoms/Heading/Heading';
import Button from '../../components/atoms/Button/Button';
import RecipesList from '../../components/organisms/RecipesList/RecipesList';
import IngredientList from '../../components/organisms/IngredientList/IngredientList';

import SingleAccordion from '../../components/organisms/SingleAccordion/SingleAccordion';

import SubpageTemplate from '../../templates/SubpageTemplate';
import useChangeShoppingList from '../../hooks/useChangeShoppingList';
import useFetchItems from '../../hooks/useFetchItems';

const StyledBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-top: 2rem;

  @media ${({ theme }) => theme.media.maxMobile} {
    margin-left: unset;
  }
`;

const ShoppingListView = () => {
  const [shoppingList, , , clearShoppingList] = useChangeShoppingList();
  const recipes = useFetchItems('recipes');

  const filteredRecipes =
    recipes && recipes.filter(recipe => shoppingList.recipes.includes(recipe.id));

  return (
    <SubpageTemplate>
      <Heading thin>your shopping list</Heading>

      {filteredRecipes && filteredRecipes.length > 0 ? (
        <>
          <SingleAccordion title="Recipes list">
            <RecipesList recipes={filteredRecipes} />
          </SingleAccordion>

          {shoppingList && shoppingList.ingredients && (
            <IngredientList ingredients={shoppingList.ingredients} />
          )}

          <StyledBtn as={Button} onClick={clearShoppingList} small remove>
            Clear the shopping list
          </StyledBtn>
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
