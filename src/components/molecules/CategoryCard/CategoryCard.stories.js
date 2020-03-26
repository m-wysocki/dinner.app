import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import CategoryCard from './CategoryCard';

storiesOf('Categories', module)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('CategoryCard', () => (
    <>
      <CategoryCard name="Makarony" />
    </>
  ));
