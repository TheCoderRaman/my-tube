import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/stores/store';
import { createRoot } from 'react-dom/client';

const root = createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>
);