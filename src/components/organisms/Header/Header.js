import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { StyledHeader, MenuItem } from './HeaderStyles';
import useModal from '../../../hooks/useModal';
import Modal from '../Modal/Modal';

const Header = () => {
  const { isModalOpen, toggleModal } = useModal();
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
        <MenuItem as={Link} to="/dodaj-przepis">
          Dodaj przepis
        </MenuItem>
      </div>
      <button type="button" onClick={toggleModal}>
        dodaj przepis
      </button>
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}>
        <p>a</p>
      </Modal>
    </StyledHeader>
  );
};

export default Header;
