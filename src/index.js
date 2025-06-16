import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RecipeApp from './components/food';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecipeApp />
  </React.StrictMode>
);

reportWebVitals();