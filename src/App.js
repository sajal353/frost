import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './components/GlobalStyles';
// import Curtain from './components/Curtain';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';


const App = () => {

  const location = useLocation();

  return (
    <div className="App">

      <GlobalStyles />
      <Nav />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/projects" exact>
            <Projects />
          </Route>

          <Route path="/contact" exact>
            <About />
          </Route>

        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
