import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import CategoriesView from './views/CategoriesView/CategoriesView';

const App = () => (
  <BrowserRouter>
    <MainTemplate>
      <h1>app</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/categories">categories</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/categories" component={() => <CategoriesView />} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default App;
