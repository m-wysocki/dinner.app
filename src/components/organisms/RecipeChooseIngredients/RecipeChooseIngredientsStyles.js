import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 8rem;
`;

export const AddIngredient = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const StyledInput = styled.input`
  margin-bottom: 0;
  margin-left: 2rem;
`;

export const Unit = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  min-width: 25px;
`;

export const MissingIngredient = styled.div`
  border-left: solid 1px ${({ theme }) => theme.colors.grey};
  padding-left: 5rem;
`;

export const IngredientList = styled.div``;
