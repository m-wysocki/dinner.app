import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../components/organisms/Header/Header';

const ViewsContainer = styled.div`
  padding: 0 ${({ theme }) => theme.padding};
  @media ${({ theme }) => theme.media.maxMobile} {
    padding: 0 ${({ theme }) => theme.paddingMobile};
  }
`;

const HomepageTemplate = ({ children }) => {
  return (
    <ViewsContainer>
      <Header />
      {children}
    </ViewsContainer>
  );
};

export default HomepageTemplate;

HomepageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
