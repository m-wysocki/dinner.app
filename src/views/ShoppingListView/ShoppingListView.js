import React, { useContext } from 'react';
import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import SubpageTemplate from '../../templates/SubpageTemplate';
import ShoppingListContext from '../../context/ShoppingListContext';
import useFetchItems from '../../hooks/useFetchItems';
import RecipesList from '../../components/organisms/RecipesList/RecipesList';

const IngredientsWrapper = styled.div`
  margin-top: 10rem;
`;

const Ingredients = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
`;

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
      {filteredRecipes && (
        <>
          <Heading small>Recipes list</Heading>
          <RecipesList recipes={filteredRecipes} />
        </>
      )}
      {finalIngredientList && finalIngredientList.length > 0 && (
        <IngredientsWrapper>
          <Heading small>Ingredient list</Heading>

          <Ingredients>
            {finalIngredientList.map(shopCategory => {
              if (shopCategory[1] && shopCategory[1].length > 0) {
                return (
                  <div key={shopCategory[0]}>
                    <h3>{shopCategory[0]}</h3>
                    <ul>
                      {shopCategory[1].map(ingredient => (
                        <li key={ingredient.id}>
                          {ingredient.name} {ingredient.amount} {ingredient.unit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return null;
            })}
          </Ingredients>
        </IngredientsWrapper>
      )}
    </SubpageTemplate>
  );
};

export default ShoppingListView;
