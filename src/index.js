import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import '@/common/reset.scss';
import App from '@router/App';
window.audio = new Audio();
window.currentIndex = -1;
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

