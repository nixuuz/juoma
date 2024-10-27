import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CocktailApp from './CocktailApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {CocktailApp}
  </React.StrictMode>
);
