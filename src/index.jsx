import React from 'react';
import ReactDOM from 'react-dom';

import './application.scss';
import App from './components/app';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
