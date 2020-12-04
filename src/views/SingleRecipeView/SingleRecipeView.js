import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/atoms/Loader/Loader';
import useFechItemsByParam from '../../hooks/useFechItemsByParam';
import Heading from '../../components/atoms/Heading/Heading';
import SubpageTemplate from '../../templates/SubpageTemplate';
import * as S from './SingleRecipeViewStyles';
import StyledLink from '../../components/atoms/StyledLink/StyledLink';

const SingleRecipeView = ({ match }) => {
  const { params } = match;
  const recipe = useFechItemsByParam('recipes', 'id', params.id)[0];

  const bookId = recipe ? recipe.bookId : null;
  const categoryId = recipe ? recipe.categoryId : null;

  const book = useFechItemsByParam('books', 'id', bookId)[0];
  const category = useFechItemsByParam('categories', 'id', categoryId)[0];

  const bookName = book ? book.name : null;
  const categoryName = category ? category.name : null;

  if (!recipe) return <Loader />;
  return (
    <SubpageTemplate>
      {recipe ? (
        <>
          <Heading thin>{recipe.name}</Heading>
          <S.Wrapper>
            <img src={recipe.image} alt={recipe.name} />
            <div>
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
                  {recipe.bookId && (
                    <li>
                      <p>
                        <b>book: </b> <i>{bookName}</i> - page {recipe.bookSite}
                      </p>
                    </li>
                  )}
                  {recipe.link && (
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
