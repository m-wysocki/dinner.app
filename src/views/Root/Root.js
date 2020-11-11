import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import Header from '../../components/organisms/Header/Header';
import MainTemplate from '../../templates/MainTemplate';
import HomepageView from '../HomepageView/HomepageView';
import RecipesView from '../RecipesView/RecipesView';
import AddRecipeModal from '../../components/organisms/AddRecipeModal/AddRecipeModal';

const ViewsContainer = styled.div`
  padding: 0 ${({ theme }) => theme.padding};
  &.isModalOpen::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
const StyledHeader = styled.div`
  margin-bottom: 50px;
  padding: 0 ${({ theme }) => theme.padding};
`;

const Root = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const toggleModalOpen = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <>
            <StyledHeader>
              <Header toggleModalOpenFn={toggleModalOpen} />
            </StyledHeader>
            <ViewsContainer
              className={isModalOpen && 'isModalOpen'}
              onClick={isModalOpen ? toggleModalOpen : null}
            >
              <Switch>
                <Route exact path="/" component={() => <HomepageView />} />
                <Route path="/przepisy">
                  <RecipesView />
                </Route>
              </Switch>
            </ViewsContainer>
            {isModalOpen && <AddRecipeModal closeModalFn={toggleModalOpen} />}
          </>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
