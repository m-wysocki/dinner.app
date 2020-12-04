import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/atoms/Loader/Loader';
import useFechItemsByParam from '../../hooks/useFechItemsByParam';
import RecipesList from '../../components/organisms/RecipesList/RecipesList';
import Heading from '../../components/atoms/Heading/Heading';
import SubpageTemplate from '../../templates/SubpageTemplate';

const SingleCategoryView = ({ match }) => {
  const { params } = match;
  const category = useFechItemsByParam('categories', 'id', params.id)[0];
  const recipes = useFechItemsByParam('recipes', 'categoryId', params.id);

  if (!category) return <Loader />;
  return (
    <SubpageTemplate>
      <Heading thin>{category.name}</Heading>
      <RecipesList recipes={recipes} />
    </SubpageTemplate>
  );
};

export default SingleCategoryView;

SingleCategoryView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
