import React from 'react';
import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading';
import SubpageTemplate from '../../templates/SubpageTemplate';
import SettingItems from '../../components/organisms/SettingItems/SettingItems';
import useFetchItems from '../../hooks/useFetchItems';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 13rem;
`;

const RecipesView = () => {
  const ingredients = useFetchItems('ingredients');
  const units = useFetchItems('units');
  const books = useFetchItems('books');
  const categories = useFetchItems('categories');
  const shopCategories = useFetchItems('shopCategories');

  return (
    <SubpageTemplate>
      <Heading thin>settings</Heading>
      <Wrapper>
        <div>
          <Heading small>Ingredients</Heading>
          <SettingItems
            items={ingredients}
            itemsType="ingredients"
            units={units}
            shopCategiories={shopCategories}
          />
        </div>

        <div>
          <Heading small>Units</Heading>
          <SettingItems items={units} itemsType="units" />
        </div>

        <div>
          <Heading small>Books</Heading>
          <SettingItems items={books} itemsType="books" />
        </div>

        <div>
          <Heading small>Categories</Heading>
          <SettingItems items={categories} itemsType="categories" />
        </div>

        <div>
          <Heading small>Shop categories</Heading>
          <SettingItems items={shopCategories} itemsType="shopCategories" />
        </div>
      </Wrapper>
    </SubpageTemplate>
  );
};

export default RecipesView;
