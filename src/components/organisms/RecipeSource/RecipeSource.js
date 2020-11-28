import React, { useState } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
import RadioButton from '../../atoms/RadioButton/RadioButton';
import Input from '../../atoms/Input/Input';
import InputLiveSearch from '../../atoms/InputLiveSearch/InputLiveSearch';

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
      <SourceType onChange={handleSourceTypeChange}>
        <SourceLabel>Źródło:</SourceLabel>
        <RadioButton label="link" id="link" value="link" checked />
        <RadioButton label="książka" id="book" value="book" />
      </SourceType>
      {sourceType === 'link' && (
        <Field name="link">
          {({ field }) => <Input id="link" name="link" label="Link do przepisu" {...field} />}
        </Field>
      )}
      {sourceType === 'book' && (
        <>
          <InputLiveSearch id="bookId" name="bookId" searchItems="books" label="Wyszukaj książkę" />
          <Field name="bookSite">
            {({ field }) => (
              <Input id="bookSite" name="bookSite" label="Strona przepisu" {...field} />
            )}
          </Field>
        </>
      )}
    </>
  );
};

export default RecipeSource;
