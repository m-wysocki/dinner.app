import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import useChangeShoppingList from '../../../hooks/useChangeShoppingList';

const List = styled.ul`
  padding-left: 1vw;
`;
const ListElements = styled.li`
  list-style: none;
`;

const IngredientsByCategory = ({ shopCategory, ingredients }) => {
  const [shoppingList, , toggleToBuyIngredient] = useChangeShoppingList();

  return (
    <>
      {ingredients.length > 0 && (
        <div>
          <h3>{shopCategory}</h3>
          <List>
            {ingredients.map(ingredient => (
              <ListElements key={ingredient.id}>
                <Checkbox
                  id={ingredient.id}
                  label={`${ingredient.name} - ${ingredient.amount} ${ingredient.unit}`}
                  checked={!shoppingList.ingredients[ingredient.id].toBuy}
                  onChange={() => toggleToBuyIngredient(ingredient.id)}
                />
              </ListElements>
            ))}
          </List>
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
