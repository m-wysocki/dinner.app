import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BiTimeFive, BiHash, BiBookBookmark } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import Heading from '../../atoms/Heading/Heading';
import { removeItem } from '../../../actions';
import * as S from './RecipeCardStyles';
import useFetchItemsByParam from '../../../hooks/useFetchItemsByParam';
import emptyPlateImage from '../../../assets/images/empty-plate.jpg';
import ShoppingListContext from '../../../context/ShoppingListContext';
import Button from '../../atoms/Button/Button';

const RecipeCard = ({ recipe, removeRecipe }) => {
  const { id, slug, name, image, preparationTime, categoryId, bookId, sourceType } = recipe;
  const book = useFetchItemsByParam('books', 'id', bookId)[0];
  const category = useFetchItemsByParam('categories', 'id', categoryId)[0];
  const bookName = book ? book.name : null;
  const categoryName = category ? category.name : null;
  const [shoppingList, setShoppingList] = useContext(ShoppingListContext);
  const handleAddToList = () => {
    if (!shoppingList.includes(id)) {
      setShoppingList([...shoppingList, id]);
      toast.success('👌 Ingredients were added to your shopping list');
    } else {
      toast.error("👎 You can't add the same recipe twice");
    }
  };
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
          {sourceType === 'book' && (
            <S.InfoItem>
              <BiBookBookmark />
              {bookName}
            </S.InfoItem>
          )}
        </S.Info>
      </S.Content>
      <S.Footer>
        <Button small secondary onClick={handleAddToList}>
          add to list
        </Button>
        <Button small secondary onClick={() => removeRecipe('recipes', id)}>
          x
        </Button>
        <Link to={`/recipes/${id}/${slug}`}>
          <Button small>more</Button>
        </Link>
      </S.Footer>
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
    sourceType: PropTypes.string.isRequired,
  }).isRequired,
  removeRecipe: PropTypes.func.isRequired,
};
