import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { StyledHeader, MenuItem } from './HeaderStyles';

const Header = () => (
  <StyledHeader>
    <div>
      <img src={logo} alt="Company name logo" />
    </div>
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
