import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

storiesOf('Headers', module)
  .add('Header - Big', () => (
    <Header big>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Header>
  ))
  .add('Header - Medium', () => (
    <Header>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Header>
  ))
  .add('Header - Small', () => (
    <Header small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Header>
  ));
