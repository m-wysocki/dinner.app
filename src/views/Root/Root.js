import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import MainTemplate from '../../templates/MainTemplate';
import HomepageView from '../HomepageView/HomepageView';
import RecipesView from '../RecipesView/RecipesView';
import AddRecipeView from '../AddRecipeView/AddRecipeView';
import SingleRecipeView from '../SingleRecipeView/SingleRecipeView';
import SingleCategoryView from '../SingleCategoryView/SingleCategoryView';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={HomepageView} />
            <Route path="/recipes/:id/:slug" component={SingleRecipeView} />
            <Route path="/categories/:id/:slug" component={SingleCategoryView} />
            <Route exact path="/recipes" component={RecipesView} />
            <Route path="/add-recipe" component={AddRecipeView} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
