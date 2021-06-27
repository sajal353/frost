import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from './components/GlobalStyles';
// import Curtain from './components/Curtain';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () => {

  return (
    <div className="App">

      <GlobalStyles />
      <Nav />

      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/projects" exact>
          <Projects />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
