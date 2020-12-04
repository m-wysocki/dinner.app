import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';
import RecipesList from '../../components/organisms/RecipesList/RecipesList';
import useFetchItems from '../../hooks/useFetchItems';
import SubpageTemplate from '../../templates/SubpageTemplate';

const RecipesView = () => {
  const recipes = useFetchItems('recipes');
  return (
    <SubpageTemplate>
      <Heading thin>recipes</Heading>
      <RecipesList recipes={recipes} />
    </SubpageTemplate>
  );
};

export default RecipesView;
