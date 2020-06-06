import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('Input', () => <Input label="Street" />)
  .add('Input with value', () => <Input label="Name" value="test value" />)
  .add('Input invalid', () => <Input type="email" label="E-mail" value="this is no email" />);
