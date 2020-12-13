import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/atoms/Loader/Loader';
import useFetchItemsByParam from '../../hooks/useFetchItemsByParam';
import Heading from '../../components/atoms/Heading/Heading';
import SubpageTemplate from '../../templates/SubpageTemplate';
import * as S from './SingleRecipeViewStyles';
import StyledLink from '../../components/atoms/StyledLink/StyledLink';
import emptyPlateImage from '../../assets/images/empty-plate.jpg';
import Button from '../../components/atoms/Button/Button';
import { removeItem } from '../../actions';

const SingleRecipeView = ({ match }) => {
  const { params } = match;
  const recipe = useFetchItemsByParam('recipes', 'id', params.id)[0];

  const bookId = recipe ? recipe.bookId : null;
  const categoryId = recipe ? recipe.categoryId : null;

  const book = useFetchItemsByParam('books', 'id', bookId)[0];
  const category = useFetchItemsByParam('categories', 'id', categoryId)[0];

  const bookName = book ? book.name : null;
  const categoryName = category ? category.name : null;

  const history = useHistory();
  const dispatch = useDispatch();
  const removeRecipe = (itemType, id) => dispatch(removeItem(itemType, id));
  const handleRemoveRecipe = () => {
    removeRecipe('recipes', recipe.id);
    toast.success('The recipe was removed successfully');
    setTimeout(() => {
      history.push('/recipes');
    }, 1500);
  };

  if (!recipe) return <Loader />;
  return (
    <SubpageTemplate>
      {recipe ? (
        <>
          <Heading thin mb="0">
            {recipe.name}
          </Heading>
          <S.Wrapper>
            <img src={recipe.image || emptyPlateImage} alt={recipe.name} />
            <div>
              <S.Buttons>
                <Button secondary small>
                  edit
                </Button>
                <Button secondary small onClick={handleRemoveRecipe}>
                  remove
                </Button>
              </S.Buttons>
              <S.Info>
                <Heading small>Recipe information</Heading>
                <ul>
                  <li>
                    <p style={{ textTransform: 'lowercase' }}>
                      <b>category: </b>
                      {categoryName}
                    </p>
                  </li>
                  {recipe.preparationTime && (
                    <li>
                      <p>
                        <b>preparation time: </b>
                        {recipe.preparationTime}
                      </p>
                    </li>
                  )}
                  {recipe.sourceType === 'book' && (
                    <li>
                      <p>
                        <b>book: </b> <i>{bookName}</i> - page {recipe.bookSite}
                      </p>
                    </li>
                  )}
                  {recipe.sourceType === 'link' && (
                    <li>
                      <p>
                        <b>link: </b>
                        <StyledLink href={recipe.link} target="_blank">
                          {recipe.link}
                        </StyledLink>
                      </p>
                    </li>
                  )}
                </ul>
              </S.Info>
              <div>
                <Heading small>Ingredients</Heading>
                <ul>
                  {recipe.ingredients &&
                    recipe.ingredients.map(ingredient => (
                      <li key={ingredient.id}>
                        <p>
                          <b>{ingredient.name}: </b>
                          {ingredient.amount} {ingredient.unit}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </S.Wrapper>
        </>
      ) : (
        <p>Niestety nie udało się odnaleźć takiego przepisu</p>
      )}
    </SubpageTemplate>
  );
};

export default SingleRecipeView;

SingleRecipeView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
