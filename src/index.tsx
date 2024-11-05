import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import reportWebVitals from './reportWebVitals'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> Wrap with Provider for Redux */}
      <App /> {/* App already contains HashRouter */}
    {/* </Provider> */}
  </React.StrictMode>
);

reportWebVitals();
