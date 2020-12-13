import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  margin-bottom: 8rem;
`;

export const AddIngredient = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const IngredientWrapper = styled.div`
  margin-left: 2rem;
  position: relative;
  &:first-of-type {
    margin-left: 0;
  }
`;

export const StyledInput = styled.input`
  margin-bottom: 0;
`;

export const Unit = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  min-width: 2.5rem;
`;

export const MissingIngredient = styled.div`
  border-left: solid 1px ${({ theme }) => theme.colors.grey};
  padding-left: 5rem;
`;
