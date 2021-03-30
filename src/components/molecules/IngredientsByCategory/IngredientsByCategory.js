import React from 'react';
import PropTypes from 'prop-types';

const IngredientsByCategory = ({ shopCategory, ingredients }) => {
  return (
    <>
      {ingredients.length > 0 && (
        <div>
          <h3>{shopCategory}</h3>
          <ul>
            {ingredients.map(ingredient => (
              <li key={ingredient.id}>
                {ingredient.name} - {ingredient.amount} {ingredient.unit}
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
  shopCategory: PropTypes.string.isRequired,
  ingredients: PropTypes.instanceOf(Array).isRequired,
};
