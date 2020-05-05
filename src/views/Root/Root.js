import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../../components/organisms/Header/Header';
import MainTemplate from '../../templates/MainTemplate';
import HomepageView from '../HomepageView/HomepageView';
import RecipesView from '../RecipesView/RecipesView';

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
                <Route exact path="/" component={() => <HomepageView />} />
                <Route path="/przepisy">
                  <RecipesView />
                </Route>
              </Switch>
            </ViewsContainer>
          </>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;