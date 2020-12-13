import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BiTimeFive, BiHash, BiBookBookmark } from 'react-icons/bi';
import { toast } from 'react-toastify';
import Heading from '../../atoms/Heading/Heading';
import * as S from './RecipeCardStyles';
import useFetchItemsByParam from '../../../hooks/useFetchItemsByParam';
import emptyPlateImage from '../../../assets/images/empty-plate.jpg';
import ShoppingListContext from '../../../context/ShoppingListContext';
import Button from '../../atoms/Button/Button';

const RecipeCard = ({ recipe }) => {
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
      setShoppingList(shoppingList.filter(recipeId => recipeId !== id));
      toast.error('🤷‍♂️Ingredients were removed from your shopping list');
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
        <Button
          small
          secondary
          remove={shoppingList.includes(id)}
          add={!shoppingList.includes(id)}
          onClick={handleAddToList}
        >
          {shoppingList.includes(id) ? '📔 remove' : '📔 add'}
        </Button>
        <Link to={`/recipes/${id}/${slug}`}>
          <Button small>more</Button>
        </Link>
      </S.Footer>
    </S.StyledRecipe>
  );
};

export default RecipeCard;

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
};
