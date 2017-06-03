import React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import Main from './Main';

render(
  <Main />,
  document.getElementById('root')
);
registerServiceWorker();
