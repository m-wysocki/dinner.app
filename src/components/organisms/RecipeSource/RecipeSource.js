import React, { useState } from 'react';
import { Field } from 'formik';
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
  const [sourceType, setSourceType] = useState('link');
  const handleSourceTypeChange = e => {
    setSourceType(e.target.value);
  };
  return (
    <>
      <Heading small mb="6rem">
        Source information
      </Heading>
      <SourceType onChange={handleSourceTypeChange}>
        <SourceLabel>Source:</SourceLabel>
        <RadioButton label="link" id="link" value="link" checked />
        <RadioButton label="book" id="book" value="book" />
      </SourceType>
      {sourceType === 'link' && (
        <Field name="link">
          {({ field }) => <Input id="link" name="link" label="Recipe link" {...field} />}
        </Field>
      )}
      {sourceType === 'book' && (
        <>
          <InputLiveSearch id="bookId" name="bookId" searchItems="books" label="Search book" />
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
