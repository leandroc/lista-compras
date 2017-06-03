import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './Main.css';

import Home from './pages/Home';
import ListaCompras from './pages/ListaCompras';
import NotFound from './pages/NotFound';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/lista/:id' component={ListaCompras} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Main;
