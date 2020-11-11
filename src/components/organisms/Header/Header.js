import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/logo.png';
import { StyledHeader, MenuItem } from './HeaderStyles';

const Header = ({ toggleModalOpenFn }) => (
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
    <button type="button" onClick={toggleModalOpenFn}>
      dodaj przepis
    </button>
  </StyledHeader>
);

Header.propTypes = {
  toggleModalOpenFn: PropTypes.func.isRequired,
};

export default Header;
