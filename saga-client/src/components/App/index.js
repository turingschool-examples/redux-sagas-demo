import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

import Login from '../../containers/Login'
import Main from '../../containers/Main'
import rootReducer from '../../reducers';
import './styles.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path='/' render={() => <Redirect to='/login' />} />
            <Route path='/login' component={Login} />
            <Route path='/main' component={Main} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
