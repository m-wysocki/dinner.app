import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addItem } from '../../../actions';
import Heading from '../../atoms/Heading/Heading';
import InputLiveSearch from '../../atoms/InputLiveSearch/InputLiveSearch';
import Input from '../../atoms/Input/Input';
import RadioButton from '../../atoms/RadioButton/RadioButton';
import AddIngredientsForm from '../AddIngredientsForm/AddIngredientsForm';

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
  const [activeTab, setActiveTab] = useState('ingredients');
  const addRecipe = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  const handleSourceTypeChange = e => {
    setSourceType(e.target.value);
  };

  const handleActiveTabChange = handleActiveTab => {
    setActiveTab(handleActiveTab);
  };

  return (
    <div>
      <Heading small>Dodaj nowy przepis</Heading>
      <button type="button" onClick={() => handleActiveTabChange('information')}>
        informacje
      </button>
      <button type="button" onClick={() => handleActiveTabChange('ingredients')}>
        składniki
      </button>
      <Formik
        initialValues={{
          name: '',
          image: 'https://picsum.photos/id/1068/400/300',
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
            {activeTab === 'ingredients' ? (
              <AddIngredientsForm />
            ) : (
              <>
                <Field name="name">
                  {({ field }) => <Input id="name" name="name" label="Tytuł" {...field} />}
                </Field>
                <Field name="image">
                  {({ field }) => (
                    <Input id="image" name="image" label="Link do zdjęcia przepisu" {...field} />
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
                      <Input id="link" name="link" label="Link do przepisu" {...field} />
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
                        <Input id="bookSite" name="bookSite" label="Strona przepisu" {...field} />
                      )}
                    </Field>
                  </>
                )}
                <Field name="preparationTime">
                  {({ field }) => (
                    <Input
                      id="preparationTime"
                      name="preparationTime"
                      label="Czas przygotowania"
                      {...field}
                    />
                  )}
                </Field>
              </>
            )}

            <div>
              <h4>Składniki:</h4>
              <ul>
                <li>składnik 1</li>
                <li>składnik 2</li>
                <li>składnik 3</li>
                <li>składnik 4</li>
              </ul>
            </div>

            <button type="submit">dodaj</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddRecipeForm;
