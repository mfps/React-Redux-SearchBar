import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './components/app';

import { Provider } from 'react-redux';
import store from './store';

class SearchBar extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

render(<SearchBar />, document.getElementById('search-bar'));
