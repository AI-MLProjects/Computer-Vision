import React from 'react';
import { Namaskar } from './models/namaskar';
import { UpDown } from './models/namaskar';
import { MovingHand } from './models/namaskar';
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Namaskar" component={MovingHand} />
        <Route exact path="/">
          <Redirect to="/Namaskar" />
        </Route>
        <Route exact path="/UpDown" component={UpDown} />
      </Switch>
    </div>
  );
};