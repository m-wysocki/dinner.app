import styled from 'styled-components';

export const SearcherWrapper = styled.div`
  margin-bottom: ${({ inline }) => (inline ? '0' : '4rem')};
  position: relative;
`;
export const SearchInput = styled.div`
  margin-bottom: 0;
`;
export const SearchResultWrapper = styled.div`
  background-color: #f6f9fc;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 9;
`;
export const AddItemName = styled.span`
  font-weight: ${({ theme }) => theme.bold};
`;
export const AddItemOption = styled.div`
  cursor: pointer;
  padding: 1rem 1.5rem;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;
export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 160px;
  overflow-y: auto;
`;
export const Item = styled.span`
  cursor: pointer;
  padding: 1rem 1.5rem;
  transition: background-color 0.2s ease-in-out;
  text-transform: lowercase;
  &:hover {
    background-color: #ccc;
  }
`;
