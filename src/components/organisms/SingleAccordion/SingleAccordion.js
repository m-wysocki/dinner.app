import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import { Arrow, Header, Wrapper } from './SingleAccordion.styled';

const SingleAccordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <Header as={Heading} onClick={handleClick} onKeyUp={handleClick} small>
        {title}
        <Arrow isOpen={isOpen} />
      </Header>
      {isOpen && <>{children}</>}
    </Wrapper>
  );
};

export default SingleAccordion;

SingleAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
