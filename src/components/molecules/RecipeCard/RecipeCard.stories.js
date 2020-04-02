import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const img =
  'https://images.unsplash.com/photo-1539586345401-51d5bfba7ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80/';

storiesOf('Recipes', module)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('RecipeCard', () => (
    <>
      <RecipeCard name="Krem z pieczonych papryk z dodatkiem oregano" img={img} />
    </>
  ));
