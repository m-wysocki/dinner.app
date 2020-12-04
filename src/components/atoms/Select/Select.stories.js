import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';

storiesOf('Select', module)
  .add('Select', () => <Select label="Street" />)
  .add('Select with value', () => <Select label="Name" value="test value" />)
  .add('Select invalid', () => <Select type="email" label="E-mail" value="this is no email" />);
