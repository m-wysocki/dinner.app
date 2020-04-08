import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Heading from '../../components/atoms/Heading/Heading';
import RecipeCard from '../../components/molecules/RecipeCard/RecipeCard';
import { addItem } from '../../actions';

const RecipesView = ({ recipes, addRecipe }) => (
  <>
    <Heading big>Przepisy</Heading>
    {recipes.map(({ _id, name, image }) => (
      <RecipeCard key={_id} _id={_id} slug={_id} img={image} name={name} />
    ))}
    <Heading small>Dodaj nowy przepis</Heading>
    <form
      onSubmit={e => {
        e.preventDefault();
        addRecipe('recipes', {
          _id: '2',
          name: 'test',
          image:
            'https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        });
      }}
    >
      <input type="text" name="id" placeholder="id" />
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="image" placeholder="image" />
      <button type="submit">dodaj</button>
    </form>
  </>
);
const mapDispatchToProp = dispatch => ({
  addRecipe: (itemType, itemContent) => dispatch(addItem(itemType, itemContent)),
});
const mapStateToProps = ({ recipes }) => ({ recipes });

export default connect(mapStateToProps, mapDispatchToProp)(RecipesView);

RecipesView.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ),
  addRecipe: PropTypes.func.isRequired,
};
RecipesView.defaultProps = {
  recipes: [],
};
