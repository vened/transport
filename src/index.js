import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './css/white.css';
import './css/main.css';
import './css/App.css';
import App from './App';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl,
    );
  });
}
