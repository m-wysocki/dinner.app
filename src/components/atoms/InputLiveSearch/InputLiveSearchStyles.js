import styled from 'styled-components';

export const SearcherWrapper = styled.div`
  margin-bottom: ${({ inline }) => (inline ? '0' : '4rem')};
  position: relative;
`;
export const SearchResultWrapper = styled.div`
  background-color: #f6f9fc;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 9;
`;
