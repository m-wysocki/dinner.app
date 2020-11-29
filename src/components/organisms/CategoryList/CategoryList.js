import React, { useEffect } from 'react';
import styled from 'styled-components';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../actions';
import RecipeCard from '../../molecules/RecipeCard/RecipeCard';

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const CategoryList = () => {
  const itemsType = 'categories';

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchItems(itemsType));
  }, [dispatch]);
  return (
    <StyledList>
      {categories &&
        categories.map(({ id, name }) => <CategoryCard key={id} id={id} slug={id} name={name} />)}
    </StyledList>
  );
};

export default CategoryList;
