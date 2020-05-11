import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Heading from '../../components/atoms/Heading/Heading';
import RecipeCard from '../../components/molecules/RecipeCard/RecipeCard';
import InputLiveSearch from '../../components/atoms/InputLiveSearch/InputLiveSearch';
import { addItem, fetchItems } from '../../actions';

const RecipesList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
`;

const RecipesView = () => {
  const itemsType = 'recipes';
  const { handleSubmit, register } = useForm();
  const recipes = useSelector(state => state.recipes);
  const dispatch = useDispatch();

  const addRecipe = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  const handleAddRecipe = async values => {
    addRecipe(itemsType, values);
  };

  useEffect(() => {
    dispatch(fetchItems(itemsType));
  }, [dispatch]);
  return (
    <>
      <Heading big>Przepisy</Heading>
      <RecipesList>
        {recipes &&
          recipes.map(({ id, name, image }) => (
            <RecipeCard key={id} id={id} slug={id} img={image} name={name} />
          ))}
      </RecipesList>
      <Heading small>Dodaj nowy przepis</Heading>
      <form onSubmit={handleSubmit(handleAddRecipe)}>
        <input type="text" name="name" placeholder="name" ref={register} />
        <input
          type="text"
          name="image"
          placeholder="image"
          ref={register}
          defaultValue="https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80"
        />
        <InputLiveSearch searchType="categories" />
        <button type="submit">dodaj</button>
      </form>
    </>
  );
};

export default RecipesView;
