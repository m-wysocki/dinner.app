import React from 'react';
import { Field } from 'formik';
import Input from '../../atoms/Input/Input';
import InputLiveSearch from '../../atoms/InputLiveSearch/InputLiveSearch';

const RecipeMainInformation = () => {
  return (
    <>
      <Field name="name">
        {({ field }) => <Input id="name" name="name" label="Tytuł" {...field} />}
      </Field>
      <Field name="image">
        {({ field }) => (
          <Input id="image" name="image" label="Link do zdjęcia przepisu" {...field} />
        )}
      </Field>
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
      <InputLiveSearch
        id="categoryId"
        name="categoryId"
        searchItems="categories"
        label="Wyszukaj kategorię"
      />
    </>
  );
};

export default RecipeMainInformation;
