import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from './RadioButton';

storiesOf('RadioButton', module).add('RadioButton', () => (
  <>
    <RadioButton id="street" label="Street" />
    <RadioButton id="street2" label="Street2" checked />
    <RadioButton id="street3" label="Street3" />
  </>
));
