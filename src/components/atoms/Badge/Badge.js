import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBadge = styled.span`
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.extra};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.bold};
  border: solid 0.2rem #fff;
`;

const Badge = ({ number }) => {
  return <StyledBadge>{number}</StyledBadge>;
};

export default Badge;

Badge.propTypes = {
  number: PropTypes.number.isRequired,
};
