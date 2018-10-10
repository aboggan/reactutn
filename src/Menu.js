import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './pages/Base.css';

class Menu extends Component {

  render() {
    return (
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/registro">Registrate</Link>
          <Link to="/login">Login</Link>
          
        </nav>
    );


  }
}
export default Menu;