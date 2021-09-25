import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledCategory, Title } from './CategoryCardStyles';

const CategoryCard = ({ category: { id, name, slug } }) => (
  <StyledCategory as={Link} to={`/categories/${id}/${slug}`}>
    <Title>{name}</Title>
  </StyledCategory>
);

export default CategoryCard;

CategoryCard.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};
