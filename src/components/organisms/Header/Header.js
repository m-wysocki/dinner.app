import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { StyledHeader, MenuItem } from './HeaderStyles';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="Company name logo" />
      </Link>
      <div>
        <MenuItem as={Link} to="/">
          Home
        </MenuItem>
        <MenuItem as={Link} to="/przepisy">
          Przepisy
        </MenuItem>
      </div>
      <MenuItem as={Link} to="/dodaj-przepis">
        Dodaj przepis
      </MenuItem>
    </StyledHeader>
  );
};

export default Header;
