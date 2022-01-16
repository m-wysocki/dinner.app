import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';

export const StyledCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.5rem;
  color: ${theme.colors.text};
  border-radius: 1rem;
  transition: background-color 0.3s ease-in-out;
  overflow: hidden;
  padding: 1.5rem;
  &:nth-of-type(5n + 1) {
    background: ${theme.colors.yellow};
  }
  &:nth-of-type(5n + 2) {
    background: ${theme.colors.salmon};
  }
  &:nth-of-type(5n + 3) {
    background: ${theme.colors.blue};
  }
  &:nth-of-type(5n + 4) {
    background: ${theme.colors.orange};
  }
  &:nth-of-type(5n + 5) {
    background: ${theme.colors.violet};
  }
  &:hover {
    background-color: ${theme.colors.green};
  }

  @media ${({ theme }) => theme.media.maxMobile} {
    height: 10rem;
  }
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: ${theme.regular};
  text-align: center;
  text-transform: lowercase;

  @media ${({ theme }) => theme.media.maxMobile} {
    font-size: 1.8rem;
  }
`;
