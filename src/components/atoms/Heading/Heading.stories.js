import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Headings', module)
  .add('Heading - Big', () => (
    <Heading big>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Heading>
  ))
  .add('Heading - Medium', () => (
    <Heading>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Heading>
  ))
  .add('Heading - Small', () => (
    <Heading small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Heading>
  ));
