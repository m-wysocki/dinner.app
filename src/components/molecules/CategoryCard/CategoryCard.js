import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledCategory, Title } from './CategoryCardStyles';

const CategoryCard = ({ id, name, slug }) => (
  <StyledCategory as={Link} to={`/categories/${id}/${slug}`}>
    <Title>{name}</Title>
  </StyledCategory>
);

export default CategoryCard;

CategoryCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
