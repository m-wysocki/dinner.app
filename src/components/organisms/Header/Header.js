import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Logo = styled.div``;
const MenuItem = styled.a`
  display: inline-block;
  margin-right: 10px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease-in-out;
  font-weight: ${({ theme }) => theme.bold};
  &:hover {
    color: ${({ theme }) => theme.colors.salmon};
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <img src={logo} alt="Company name logo" />
    </Logo>
    <div>
      <MenuItem as={Link} to="/">
        Home
      </MenuItem>
      <MenuItem as={Link} to="/przepisy">
        Przepisy
      </MenuItem>
    </div>
  </StyledHeader>
);

export default Header;
