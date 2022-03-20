import React, { useState } from 'react';
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
