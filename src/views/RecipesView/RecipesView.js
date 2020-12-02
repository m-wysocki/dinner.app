import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';
import RecipesList from '../../components/organisms/RecipesList/RecipesList';
import useFetchItems from '../../hooks/useFetchItems';

const RecipesView = () => {
  const recipes = useFetchItems('recipes');
  return (
    <>
      <Heading big>Przepisy</Heading>
      <RecipesList recipes={recipes} />
    </>
  );
};

export default RecipesView;
