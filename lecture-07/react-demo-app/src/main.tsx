import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

function main() {
  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render((
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  ));
}

main();
