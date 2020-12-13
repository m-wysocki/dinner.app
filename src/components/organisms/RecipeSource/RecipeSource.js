import React from 'react';
import { Field, useFormikContext } from 'formik';
import styled from 'styled-components';
import RadioButton from '../../atoms/RadioButton/RadioButton';
import Input from '../../atoms/Input/Input';
import InputLiveSearch from '../../atoms/InputLiveSearch/InputLiveSearch';
import Heading from '../../atoms/Heading/Heading';

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

const RecipeSource = () => {
  const { values } = useFormikContext();
  return (
    <>
      <Heading small mb="6rem">
        Source information
      </Heading>
      <SourceType>
        <SourceLabel>Source:</SourceLabel>
        <Field component={RadioButton} name="sourceType" id="link" label="link" />
        <Field component={RadioButton} name="sourceType" id="book" label="book" />
        <Field component={RadioButton} name="sourceType" id="own" label="own recipe" />
      </SourceType>
      {values.sourceType === 'link' && (
        <Field name="link">
          {({ field }) => <Input id="link" name="link" label="Recipe link" {...field} />}
        </Field>
      )}
      {values.sourceType === 'book' && (
        <>
          <InputLiveSearch
            withAddingNewItem
            withAddingToFormikContext
            id="bookId"
            name="bookId"
            searchItems="books"
            label="Search book"
          />
          <Field name="bookSite">
            {({ field }) => (
              <Input id="bookSite" name="bookSite" label="Recipe page in the book" {...field} />
            )}
          </Field>
        </>
      )}
    </>
  );
};

export default RecipeSource;
