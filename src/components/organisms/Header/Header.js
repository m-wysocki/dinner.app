import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledHeader, MenuItem } from './HeaderStyles';
import Logo from '../../atoms/Logo/Logo';
import ShoppingListContext from '../../../context/ShoppingListContext';
import Button from '../../atoms/Button/Button';
import Badge from '../../atoms/Badge/Badge';

const Header = ({ subpage }) => {
  const [shoppingList] = useContext(ShoppingListContext);
  const { recipes } = shoppingList;

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
        <Button as={Link} small="true" to="/shopping-list">
          shopping list {recipes.length > 0 && <Badge number={recipes.length} />}
        </Button>
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
