import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import MainTemplate from '../../templates/MainTemplate';
import GlobalStyle from '../../theme/GlobalStyle';
import HomepageView from '../HomepageView/HomepageView';
import RecipesView from '../RecipesView/RecipesView';
import AddRecipeView from '../AddRecipeView/AddRecipeView';
import SingleRecipeView from '../SingleRecipeView/SingleRecipeView';
import SingleCategoryView from '../SingleCategoryView/SingleCategoryView';
import ShoppingListView from '../ShoppingListView/ShoppingListView';
import ShoppingListContext from '../../context/ShoppingListContext';


const Root = () => {
  // const [shoppingList, setShoppingList] = useState([
  //   'Exr3LfC4vMhm3giY5hUw',
  //   'QQ29wWOFoYBoDrOo3XXC',
  // ]);
  const [shoppingList, setShoppingList] = useState([]);
  return (
    <Provider store={store}>
      <ShoppingListContext.Provider value={[shoppingList, setShoppingList]}>
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route exact path="/" component={HomepageView} />
              <Route path="/recipes/:id/:slug" component={SingleRecipeView} />
              <Route path="/categories/:id/:slug" component={SingleCategoryView} />
              <Route exact path="/recipes" component={RecipesView} />
              <Route path="/add-recipe" component={AddRecipeView} />
              <Route path="/shopping-list" component={ShoppingListView} />
            </Switch>
            <GlobalStyle />
          </MainTemplate>
        </BrowserRouter>
      </ShoppingListContext.Provider>
    </Provider>
  );
};

export default Root;
