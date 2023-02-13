import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';

const Button = styled.div`
  align-self: flex-end;
  cursor: pointer;
  background-color: #af2626;
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  :hover {
    background-color: #e42323;
  }
  svg {
    width: 13px;
    height: 13px;
  }
  svg path {
    stroke: #fff;
  }
`;

const DeleteButton = ({ onClickFn, className }) => {
  return (
    <Button className={className} onClick={onClickFn}>
      <GrFormClose />
    </Button>
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  onClickFn: PropTypes.func.isRequired,
  className: PropTypes.string,
};

DeleteButton.defaultProps = {
  className: null,
};
