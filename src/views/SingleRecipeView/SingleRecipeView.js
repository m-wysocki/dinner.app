import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/atoms/Loader/Loader';
import useFechItemsByParam from '../../hooks/useFechItemsByParam';

const SingleRecipeView = ({ match }) => {
  const { params } = match;
  const recipe = useFechItemsByParam('recipes', 'id', params.id)[0];
  const recipeTest = recipe ? Object.keys(recipe) : null;

  if (!recipe) return <Loader />;
  return (
    <div>
      {recipe ? (
        <div>
          <h1>{recipe.name}</h1>
          <ul>
            {recipeTest &&
              // eslint-disable-next-line array-callback-return
              recipeTest.map(r => {
                if (r !== 'ingredients') {
                  return (
                    <li key={r}>
                      <p>
                        <i>{r} &gt; </i>
                        <b>{recipe[r]}</b>
                      </p>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      ) : (
        <p>Niestety nie udało się odnaleźć takiego przepisu</p>
      )}
    </div>
  );
};

export default SingleRecipeView;

SingleRecipeView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
