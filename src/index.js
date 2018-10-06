import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Menu from './Menu';
import Registro from './pages/Registro';
import Login from './pages/Login';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import PerfilPage from './pages/PerfilPage';

/**
 * The <BrowserRouter> should be used when you have a server that will handle dynamic requests (knows how to respond to any possible URI), while the <HashRouter> should be used for static websites (where the server can only respond to requests for files that it knows about).
 */
ReactDOM.render((
  <BrowserRouter>
  <header>
    <Route component={Menu}/>
    <Route exact path="/" component= {Registro} />
    <Route exact path="/home" component= {Home} />
    <Route path="/registro" component = {Registro} />
    <Route path="/login" component = {Login} />
    <Route path="/perfilPage/:id" component = {PerfilPage} />

  </header>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
