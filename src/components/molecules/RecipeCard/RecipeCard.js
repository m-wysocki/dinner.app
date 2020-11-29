import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Heading from '../../atoms/Heading/Heading';
import { removeItem } from '../../../actions';
import { StyledRecipe, Image, Content, StyledHeading } from './RecipeCardStyles';

const RecipeCard = ({ id, name, slug, img, removeRecipe }) => (
  <div>
    <StyledRecipe as={Link} to={`/przepisy/${id}/${slug}`}>
      <Image>
        <img src={img} alt={name} />
      </Image>
      <Content>
        <StyledHeading as={Heading}>{name}</StyledHeading>
      </Content>
    </StyledRecipe>
    <button type="button" onClick={() => removeRecipe('recipes', id)}>
      usuń
    </button>
  </div>
);

const mapDispatchToProp = dispatch => ({
  removeRecipe: (itemType, id) => dispatch(removeItem(itemType, id)),
});

export default connect(null, mapDispatchToProp)(RecipeCard);

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  removeRecipe: PropTypes.func.isRequired,
};
