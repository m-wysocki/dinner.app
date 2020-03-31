import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { theme } from '../../../theme/mainTheme';

const StyledCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 125px;
  color: ${theme.colors.text};
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
  overflow: hidden;
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
    background-color: ${theme.colors.main};
  }
`;
const Title = styled.span`
  font-size: 2.2rem;
  font-weight: ${theme.bold};
`;

const CategoryCard = ({ name, slug }) => (
  <StyledCategory as={Link} to={slug}>
    <Title>{name}</Title>
  </StyledCategory>
);

export default CategoryCard;

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
