import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../actions';

const SingleRecipeView = ({ match }) => {
  const { params } = match;
  const itemsType = 'recipes';

  const recipes = useSelector(state => state.recipes);
  const dispatch = useDispatch();
  const recipe = recipes ? recipes.filter(recipeItem => recipeItem.id === params.id)[0] : null;
  const recipeTest = recipe ? Object.keys(recipe) : null;

  useEffect(() => {
    dispatch(fetchItems(itemsType));
  }, [dispatch]);

  if (!recipe) return <p>Ładuję...</p>;
  return (
    <div>
      {recipe ? (
        <div>
          <h1>{recipe.name}</h1>
          <ul>
            {recipeTest &&
              recipeTest.map(r => (
                <li key={r}>
                  <p>
                    <i>{r} => </i>
                    <b>{recipe[r]}</b>
                  </p>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <p>Niestety nie udało się odnaleźć takiego przepisu</p>
      )}
    </div>
  );
};

export default SingleRecipeView;
