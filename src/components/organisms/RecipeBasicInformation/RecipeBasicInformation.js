import React from 'react';
import { ErrorMessage, Field } from 'formik';
import Input from '../../atoms/Input/Input';
import InputLiveSearch from '../../atoms/InputLiveSearch/InputLiveSearch';
import Heading from '../../atoms/Heading/Heading';
import InputError from '../../atoms/InputError/InputError';

const RecipeBasicInformation = () => {
  return (
    <>
      <Heading small mb="6rem">
        Basic information
      </Heading>

      <Field name="name">
        {({ field }) => <Input id="name" name="name" label="Title*" {...field} />}
      </Field>
      <ErrorMessage name="name" component={InputError} />

      <Field name="image">
        {({ field }) => <Input id="image" name="image" label="Image link" {...field} />}
      </Field>

      <Field name="preparationTime">
        {({ field }) => (
          <Input id="preparationTime" name="preparationTime" label="Preparation time" {...field} />
        )}
      </Field>

      <InputLiveSearch
        withAddingToFormikContext
        name="categoryId"
        searchItems="categories"
        label="Search category*"
      />
      <ErrorMessage name="categoryId" component={InputError} />
    </>
  );
};

export default RecipeBasicInformation;
