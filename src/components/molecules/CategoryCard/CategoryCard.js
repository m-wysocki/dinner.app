import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledCategory, Title } from './CategoryCardStyles';

const CategoryCard = ({ name, slug }) => (
  <StyledCategory as={Link} to={slug}>
    <Title>{name}</Title>
  </StyledCategory>
);

export default CategoryCard;

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
