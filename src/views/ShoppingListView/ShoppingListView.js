import React, { useContext, useEffect } from 'react';
import Heading from '../../components/atoms/Heading/Heading';
import SubpageTemplate from '../../templates/SubpageTemplate';
import ShoppingListContext from '../../context/ShoppingListContext';
import useFetchItems from '../../hooks/useFetchItems';

const ShoppingListView = () => {
  const [shoppingList] = useContext(ShoppingListContext);
  const recipes = useFetchItems('recipes');
  const ingredients = useFetchItems('ingredients');
  const shopCategories = useFetchItems('shopCategories');
  const ingredientList = [];
  let ingredientListReduced = [];
  let finalIngredientList = [];

  if (shoppingList && shoppingList.length > 0 && recipes && ingredients && shopCategories) {
    const fiteredRecipes = recipes.filter(recipe => shoppingList.includes(recipe.id));
    fiteredRecipes.forEach(recipe => {
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
      {/*<p>Recipes list</p>*/}
      {/*<ul>*/}
      {/*  {shoppingList.map(item => (*/}
      {/*    <li key={item}>{item}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      {finalIngredientList && finalIngredientList.length > 0 && (
        <>
          <Heading small>Ingredient list</Heading>

          {finalIngredientList.map(shopCategory => (
            <>
              {shopCategory[1] && shopCategory[1].length > 0 && (
                <>
                  <h3>{shopCategory[0]}</h3>
                  <ul>
                    {shopCategory[1].map(ingredient => (
                      <li key={ingredient.id}>
                        {ingredient.name} {ingredient.amount} {ingredient.unit}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          ))}
        </>
      )}
    </SubpageTemplate>
  );
};

export default ShoppingListView;
