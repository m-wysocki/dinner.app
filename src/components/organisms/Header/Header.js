import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../../atoms/Logo/Logo';
import Badge from '../../atoms/Badge/Badge';

import useChangeShoppingList from '../../../hooks/useChangeShoppingList';

import { StyledHeader, MenuItem, StyledButton, StyledMenu } from './HeaderStyles';

const Header = ({ subpage }) => {
  const [shoppingList] = useChangeShoppingList();
  const { recipes } = shoppingList;

  return (
    <StyledHeader subpage={subpage}>
      <Link to="/">
        <Logo />
      </Link>

      <StyledMenu>
        <MenuItem as={Link} to="/">
          home
        </MenuItem>

        <MenuItem as={Link} to="/recipes">
          recipes
        </MenuItem>

        <MenuItem as={Link} to="/add-recipe">
          add recipe
        </MenuItem>

        <StyledButton as={Link} to="/shopping-list" small="true">
          shopping list {recipes.length > 0 && <Badge number={recipes.length} />}
        </StyledButton>
      </StyledMenu>
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
