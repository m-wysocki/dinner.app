import React from 'react';
import { Formik, Form, Field } from 'formik';
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
  const addRecipe = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  return (
    <div>
      <Heading small>Dodaj nowy przepis</Heading>
      <Formik
        initialValues={{
          name: '',
          image:
            'https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
          categoryId: '',
          sourceType: '',
          bookId: '',
        }}
        onSubmit={values => {
          addRecipe(itemsType, values);
        }}
      >
        {() => (
          <Form>
            <Field name="name">
              {({ field }) => (
                <StyledInput as={Input} id="name" name="name" label="Tytuł" {...field} />
              )}
            </Field>
            <Field name="image">
              {({ field }) => (
                <StyledInput
                  as={Input}
                  id="image"
                  name="image"
                  label="Link do zdjęcia przepisu"
                  {...field}
                />
              )}
            </Field>
            <InputLiveSearch
              id="categoryId"
              name="categoryId"
              searchItems="categories"
              label="Wyszukaj kategorię"
            />

            <InputLiveSearch
              id="bookId"
              name="bookId"
              searchItems="books"
              label="Wyszukaj książkę"
            />
            <button type="submit">dodaj</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddRecipeForm;
