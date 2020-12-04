import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../components/organisms/Header/Header';

const ViewsContainer = styled.div`
  margin: 0 ${({ theme }) => theme.padding};
  position: relative;
  &::before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    top: 5rem;
    bottom: -5rem;
    left: 0;
    right: 0;
    margin: 0 5rem;
    z-index: -1;
  }
`;

const SubpageTemplate = ({ children }) => {
  return (
    <>
      <Header subpage />
      <ViewsContainer>{children}</ViewsContainer>
    </>
  );
};

export default SubpageTemplate;

SubpageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
