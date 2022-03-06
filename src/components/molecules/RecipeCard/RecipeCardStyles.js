import styled, { css } from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.bold};
  color: #fff;
  margin-top: auto;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  transition: background-color 0.3s ease-in-out;
`;

export const Image = styled.div`
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: saturate(0.9);
  overflow: hidden;
  transition: filter 0.3s ease-in-out;
  img {
    width: 100%;
    height: auto;
  }
`;

export const StyledRecipe = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
  transition: box-shadow 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    ${Image} {
      filter: saturate(1);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1.5rem;
`;

export const StyledHeading = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 3rem 0;
  word-break: break-word;
  text-transform: lowercase;

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.extra};
    }
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.3rem;
  ${({ lower }) =>
    lower &&
    css`
      text-transform: lowercase;
    `}

  svg {
    width: 1.7rem;
    height: auto;
    margin-right: 0.5rem;
  }
`;
