
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';

import Home from "../pages/Home/Home"
import MediaContainer from '../pages/MediaContainer/MediaContainer';

const AppRouter = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route path="/(movies|series)/" component={MediaContainer} />

        </Switch>
        <Footer />
      </BrowserRouter>
  )
}


export default AppRouter;
