import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  padding: 25px;
  background-color: #f6f9fc;
  transition: background-color 0.3s ease-in-out;
`;
export const StyledRecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    ${Content} {
      background-color: #fff;
    }
  }
`;
export const Image = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
`;

export const StyledHeading = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin: 0;
  word-break: break-word;
`;
