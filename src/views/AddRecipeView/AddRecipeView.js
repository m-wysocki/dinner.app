import React from 'react';
import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import AddRecipeMultiStepForm from '../../components/organisms/AddRecipeMultiStepForm/AddRecipeMultiStepForm';
import SubpageTemplate from '../../templates/SubpageTemplate';

const Wrapper = styled.div`
  margin-top: 50px;
  background-color: #fff;
  border: solid 3px ${({ theme }) => theme.colors.grey};
  padding: 30px;
`;

const AddRecipeView = () => {
  return (
    <SubpageTemplate>
      <Heading thin>Add recipe</Heading>
      <Wrapper>
        <AddRecipeMultiStepForm />
      </Wrapper>
    </SubpageTemplate>
  );
};

export default AddRecipeView;
