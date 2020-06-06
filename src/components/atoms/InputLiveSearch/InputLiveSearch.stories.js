import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import InputLiveSearch from './InputLiveSearch';
import store from '../../../store';

storiesOf('InputLiveSearch', module).add('InputLiveSearch', () => (
  <Provider store={store}>
    <InputLiveSearch />
  </Provider>
));
