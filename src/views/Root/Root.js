import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import Header from '../../components/organisms/Header/Header';
import MainTemplate from '../../templates/MainTemplate';
import HomepageView from '../HomepageView/HomepageView';
import RecipesView from '../RecipesView/RecipesView';
import AddRecipeView from '../AddRecipeView/AddRecipeView';
import SingleRecipeView from '../SingleRecipeView/SingleRecipeView';
import SingleCategoryView from '../SingleCategoryView/SingleCategoryView';

const ViewsContainer = styled.div`
  padding: 0 ${({ theme }) => theme.padding};
`;
const StyledHeader = styled.div`
  margin-bottom: 50px;
  padding: 0 ${({ theme }) => theme.padding};
`;

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <>
            <StyledHeader>
              <Header />
            </StyledHeader>
            <ViewsContainer>
              <Switch>
                <Route exact path="/" component={HomepageView} />
                <Route path="/przepisy/:id/:slug" component={SingleRecipeView} />
                <Route path="/kategorie/:id/:slug" component={SingleCategoryView} />
                <Route exact path="/przepisy" component={RecipesView} />
                <Route path="/dodaj-przepis" component={AddRecipeView} />
              </Switch>
            </ViewsContainer>
          </>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
