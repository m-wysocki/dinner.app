import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';

export const StyledCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 125px;
  color: ${theme.colors.text};
  border-radius: 1rem;
  transition: background-color 0.3s ease-in-out;
  overflow: hidden;
  padding: 15px;
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
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: ${theme.regular};
  text-align: center;
  text-transform: lowercase;
`;
