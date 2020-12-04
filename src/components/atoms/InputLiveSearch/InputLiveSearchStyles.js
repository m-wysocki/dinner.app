import styled from 'styled-components';

export const SearcherWrapper = styled.div`
  margin-bottom: 40px;
`;
export const SearchInput = styled.div`
  margin-bottom: 0;
  //background-color: red;
`;
export const SearchResultWrapper = styled.div`
  background-color: #f6f9fc;
`;
export const AddItemName = styled.span`
  font-weight: ${({ theme }) => theme.bold};
`;
export const AddItemOption = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;
export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Item = styled.span`
  cursor: pointer;
  padding: 10px 15px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #ccc;
  }
`;
