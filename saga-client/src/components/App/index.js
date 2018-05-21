import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import Login from '../../containers/Login'
import Main from '../../containers/Main'
import './styles.css';


class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' render={() => <Redirect to='/login' />} />
        <Route path='/login' component={Login} />
        <Route path='/main' component={Main} />
      </div>
    );
  }
}

export default App;
