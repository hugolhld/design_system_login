import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/normalize.css'
import Body from './components/Layout/Body';
import Index from './pages/Index.js';
import GlobalStyle from './components/Text/GlobalFonts'

ReactDOM.render(
  <React.StrictMode>
    <Body></Body>
    <GlobalStyle/>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);