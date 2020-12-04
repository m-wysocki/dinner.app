import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledHeader, MenuItem } from './HeaderStyles';
import Logo from '../../atoms/Logo/Logo';

const Header = ({ subpage }) => {
  return (
    <StyledHeader subpage={subpage}>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <MenuItem as={Link} to="/">
          home
        </MenuItem>
        <MenuItem as={Link} to="/recipes">
          recipes
        </MenuItem>
        <MenuItem as={Link} to="/add-recipe">
          add recipe
        </MenuItem>
      </div>
    </StyledHeader>
  );
};

export default Header;

Header.propTypes = {
  subpage: PropTypes.bool,
};

Header.defaultProps = {
  subpage: false,
};
