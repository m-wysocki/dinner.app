import React from 'react';
import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import AddRecipeMultiStepForm from '../../components/organisms/AddRecipeMultiStepForm/AddRecipeMultiStepForm';

const Wrapper = styled.div`
  margin-top: 50px;
  background-color: #f1fffb;
  padding: 30px;
`;

const AddRecipeView = () => {
  return (
    <>
      <Heading big>Dodaj nowy przepis</Heading>
      <Wrapper>
        <AddRecipeMultiStepForm />
      </Wrapper>
    </>
  );
};

export default AddRecipeView;
