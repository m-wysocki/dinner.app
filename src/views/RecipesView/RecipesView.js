import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Heading from '../../components/atoms/Heading/Heading';
import RecipeCard from '../../components/molecules/RecipeCard/RecipeCard';

const RecipesView = ({ recipes }) => (
  <>
    <Heading big>Przepisy</Heading>
    {recipes.map(({ _id, name, image }) => (
      <RecipeCard key={_id} _id={_id} slug={_id} img={image} name={name} />
    ))}
  </>
);
const mapStateToProps = ({ recipes }) => ({ recipes });

export default connect(mapStateToProps)(RecipesView);

RecipesView.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ),
};
RecipesView.defaultProps = {
  recipes: [],
};
