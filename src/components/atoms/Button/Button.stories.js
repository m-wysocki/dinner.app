import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Button', () => <Button>next</Button>)
  .add('Button - small', () => <Button small>more</Button>)
  .add('Button - secondary', () => <Button secondary>secondary</Button>);
