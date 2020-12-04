import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledLogo = styled.span`
  font-weight: 900;
  font-size: ${({ inherit }) => (inherit ? 'inherit' : '3.2rem')};
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease-in-out;
  ${({ noHover }) =>
    !noHover &&
    css`
      &:hover {
        color: ${({ theme }) => theme.colors.extra};
      }
    `}
`;

const Logo = ({ inherit, noHover }) => {
  return (
    <StyledLogo inherit={inherit} noHover={noHover}>
      d!nner.
    </StyledLogo>
  );
};

export default Logo;

Logo.propTypes = {
  inherit: PropTypes.bool,
  noHover: PropTypes.bool,
};

Logo.defaultProps = {
  inherit: false,
  noHover: false,
};
