import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../components/organisms/Header/Header';

const ViewsContainer = styled.div`
  margin: 0 ${({ theme }) => theme.padding};
  position: relative;

  @media ${({ theme }) => theme.media.maxMobile} {
    margin: 0 ${({ theme }) => theme.paddingMobile};
  }

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

    @media ${({ theme }) => theme.media.maxMobile} {
      margin: 0 2rem;
      top: 2rem;
      bottom: -2rem;
    }
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
