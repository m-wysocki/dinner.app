import React from 'react';
import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';
import * as S from './AddRecipeModalStyles';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';

const AddRecipeModal = ({ closeModalFn }) => {
  return (
    <S.Wrapper>
      <S.CloseButton onClick={closeModalFn}>
        <GrFormClose />
      </S.CloseButton>
      <AddRecipeForm />
    </S.Wrapper>
  );
};

AddRecipeModal.propTypes = {
  closeModalFn: PropTypes.func.isRequired,
};

export default AddRecipeModal;
