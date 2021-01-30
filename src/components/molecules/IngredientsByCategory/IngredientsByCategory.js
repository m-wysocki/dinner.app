import React from 'react';
import PropTypes from 'prop-types';

const IngredientsByCategory = ({ ingredientsByCategory }) => {
  const [ingredientCategory, ingredients] = ingredientsByCategory;

  return (
    <>
      {ingredients.length > 0 && (
        <div>
          <h3>{ingredientCategory}</h3>
          <ul>
            {ingredients.map(ingredient => (
              <li key={ingredient.id}>
                {ingredient.name} {ingredient.amount} {ingredient.unit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default IngredientsByCategory;

IngredientsByCategory.propTypes = {
  ingredientsByCategory: PropTypes.instanceOf(Array).isRequired,
};
