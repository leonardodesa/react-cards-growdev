import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './views/Main';
import Login from './views/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
