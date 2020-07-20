import React from 'react';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UsedCars from './pages/UsedCars';

// Redux
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Router>
      <Provider store={store}>

        <Header city="Sao Paulo" />

        <Switch>
          <Route exact path="/" component={UsedCars} />
        </Switch>

      </Provider>
    </Router>
  );
};

export default App;
