import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/atoms/Loader/Loader';
import useFechItemsByParam from '../../hooks/useFechItemsByParam';
import RecipesList from '../../components/organisms/RecipesList/RecipesList';

const SingleCategoryView = ({ match }) => {
  const { params } = match;
  const category = useFechItemsByParam('categories', 'id', params.id)[0];
  const recipes = useFechItemsByParam('recipes', 'categoryId', params.id);

  if (!category) return <Loader />;
  return (
    <div>
      <h1>Przepisy z kategorii: {category.name}</h1>
      <RecipesList recipes={recipes} />
    </div>
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
