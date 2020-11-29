import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Heading from '../../components/atoms/Heading/Heading';
import RecipeCard from '../../components/molecules/RecipeCard/RecipeCard';
import { fetchItems } from '../../actions';

const RecipesList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
`;

const RecipesView = () => {
  const itemsType = 'recipes';

  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(fetchItems(itemsType));
  }, [dispatch]);
  return (
    <>
      <Heading big>Przepisy</Heading>
      <RecipesList>
        {recipes &&
          recipes.map(({ id, slug, name, image }) => (
            <RecipeCard key={id} id={id} slug={slug} img={image} name={name} />
          ))}
      </RecipesList>
    </>
  );
};

export default RecipesView;
