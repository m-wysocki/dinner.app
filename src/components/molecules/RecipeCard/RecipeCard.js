import React from 'react';
import { Link } from 'react-router-dom';
import { BiTimeFive, BiHash, BiBookBookmark } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Heading from '../../atoms/Heading/Heading';
import { removeItem } from '../../../actions';
import * as S from './RecipeCardStyles';
import useFechItemsByParam from '../../../hooks/useFechItemsByParam';
import emptyPlateImage from '../../../assets/images/empty-plate.jpg';

const RecipeCard = ({ recipe, removeRecipe }) => {
  const { id, slug, name, image, preparationTime, categoryId, bookId } = recipe;
  const book = useFechItemsByParam('books', 'id', bookId)[0];
  const category = useFechItemsByParam('categories', 'id', categoryId)[0];
  const bookName = book ? book.name : null;
  const categoryName = category ? category.name : null;
  return (
    <S.StyledRecipe>
      <S.Image>
        <img src={image || emptyPlateImage} alt={name} />
      </S.Image>
      <S.Content>
        <S.StyledHeading as={Heading}>{name}</S.StyledHeading>
        <S.Info>
          {preparationTime && (
            <S.InfoItem>
              <BiTimeFive />
              {preparationTime}
            </S.InfoItem>
          )}
          {categoryName && (
            <S.InfoItem lower>
              <BiHash />
              {categoryName}
            </S.InfoItem>
          )}
          {bookName && (
            <S.InfoItem>
              <BiBookBookmark />
              {bookName}
            </S.InfoItem>
          )}
        </S.Info>
      </S.Content>
      <S.Footer as={Link} to={`/recipes/${id}/${slug}`}>
        more
      </S.Footer>
      {/*<button type="button" onClick={() => removeRecipe('recipes', id)}>*/}
      {/*  usuń*/}
      {/*</button>*/}
    </S.StyledRecipe>
  );
};

const mapDispatchToProp = dispatch => ({
  removeRecipe: (itemType, id) => dispatch(removeItem(itemType, id)),
});

export default connect(null, mapDispatchToProp)(RecipeCard);

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    preparationTime: PropTypes.string,
    categoryId: PropTypes.string.isRequired,
    bookId: PropTypes.string,
  }).isRequired,
  removeRecipe: PropTypes.func.isRequired,
};
