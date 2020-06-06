import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addItem } from '../../../actions';
import Heading from '../../atoms/Heading/Heading';
import InputLiveSearch from '../../atoms/InputLiveSearch/InputLiveSearch';
import Input from '../../atoms/Input/Input';

const StyledInput = styled(Input)`
  margin-bottom: 40px;
`;

const AddRecipeForm = () => {
  const itemsType = 'recipes';
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const addRecipe = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  const handleAddRecipe = async values => {
    addRecipe(itemsType, values);
  };

  return (
    <div>
      <Heading small>Dodaj nowy przepis</Heading>
      <form onSubmit={handleSubmit(handleAddRecipe)}>
        <StyledInput as={Input} id="name" label="Tytuł" name="name" ref={register} />
        <StyledInput
          as={Input}
          id="image"
          label="Link do zdjęcia przepisu"
          name="image"
          ref={register}
          defaultValue="https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80"
        />
        <InputLiveSearch searchType="categories" />
        <button type="submit">dodaj</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
