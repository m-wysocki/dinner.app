import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';

const Content = styled.div`
  padding: 25px;
  background-color: #f6f9fc;
  transition: background-color 0.3s ease-in-out;
`;
const StyledRecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: auto;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    ${Content} {
      background-color: #fff;
    }
  }
`;
const Image = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 1.8rem;
  margin: 0;
`;

const RecipeCard = ({ name, slug, img }) => (
  <StyledRecipe as={Link} to={slug}>
    <Image>
      <img src={img} alt={name} />
    </Image>
    <Content>
      <StyledHeading>{name}</StyledHeading>
    </Content>
  </StyledRecipe>
);

export default RecipeCard;

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
