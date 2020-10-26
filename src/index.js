import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/normalize.css'
import Body from './components/Layout/Body';
import Signin from './pages/Signin.js';
import GlobalStyle from './components/Text/GlobalFonts'

ReactDOM.render(
  <React.StrictMode>
    <Body></Body>
    <GlobalStyle/>
    <Signin />
  </React.StrictMode>,
  document.getElementById('root')
);