import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Switch,Route, BrowserRouter, Link} from "react-router-dom";
import Body from './components/Layout/Body';
import SignIn from './pages/SignIn.js';
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import Footer from './components/Layout/Footer';
import GlobalStyle from './components/Text/GlobalFonts'
import './assets/styles/normalize.css'

const App = () =>
{
  return(
    <BrowserRouter>
      <Body/>
      <GlobalStyle/>

      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/" component={SignIn} />
      </Switch>
      
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
