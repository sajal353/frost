import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
