import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from './components/GlobalStyles';
import Scene from './components/Scene';
import Curtain from './components/Curtain';
import Nav from './components/Nav';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">

      <GlobalStyles />
      <Curtain />
      <Scene />
      <Nav />

      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
