import React from 'react';
import ReactDOM from 'react-dom/client';
import Accueil from './pages/Accueil';
import "./utils/style/CSS/GlobalStyle.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Accueil />
  </React.StrictMode>
);
