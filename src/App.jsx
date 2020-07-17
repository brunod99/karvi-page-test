import React from 'react';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UsedCars from './pages/UsedCars';

const App = () => {
  return (
    <Router>
      <Header city="Sao Paulo" />

      <Switch>
        <Route exact path="/" component={UsedCars} />
      </Switch>

    </Router>
  );
};

export default App;
