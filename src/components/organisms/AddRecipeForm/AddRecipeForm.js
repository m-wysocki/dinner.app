import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addItem } from '../../../actions';
import Heading from '../../atoms/Heading/Heading';
import InputLiveSearch from '../../atoms/InputLiveSearch/InputLiveSearch';
import Input from '../../atoms/Input/Input';
import RadioButton from '../../atoms/RadioButton/RadioButton';

const StyledInput = styled(Input)`
  margin-bottom: 40px;
`;
const SourceType = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -20px;
  margin-bottom: 20px;
`;
const SourceLabel = styled.p`
  margin-right: 10px;
`;

const AddRecipeForm = () => {
  const itemsType = 'recipes';
  const dispatch = useDispatch();
  const [sourceType, setSourceType] = useState('link');
  const addRecipe = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  const handleSourceTypeChange = e => {
    setSourceType(e.target.value);
  };

  return (
    <div>
      <Heading small>Dodaj nowy przepis</Heading>
      <Formik
        initialValues={{
          name: '',
          image:
            'https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
          categoryId: '',
          bookId: '',
          bookSite: '',
          link: '',
          preparationTime: '',
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

            <SourceType onChange={handleSourceTypeChange}>
              <SourceLabel>Źródło:</SourceLabel>
              <RadioButton label="link" id="link" value="link" checked />
              <RadioButton label="książka" id="book" value="book" />
            </SourceType>
            {sourceType === 'link' && (
              <Field name="link">
                {({ field }) => (
                  <StyledInput
                    as={Input}
                    id="link"
                    name="link"
                    label="Link do przepisu"
                    {...field}
                  />
                )}
              </Field>
            )}
            {sourceType === 'book' && (
              <>
                <InputLiveSearch
                  id="bookId"
                  name="bookId"
                  searchItems="books"
                  label="Wyszukaj książkę"
                />
                <Field name="bookSite">
                  {({ field }) => (
                    <StyledInput
                      as={Input}
                      id="bookSite"
                      name="bookSite"
                      label="Strona przepisu"
                      {...field}
                    />
                  )}
                </Field>
              </>
            )}
            <Field name="preparationTime">
              {({ field }) => (
                <StyledInput
                  as={Input}
                  id="preparationTime"
                  name="preparationTime"
                  label="Czas przygotowania"
                  {...field}
                />
              )}
            </Field>

            <button type="submit">dodaj</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddRecipeForm;
