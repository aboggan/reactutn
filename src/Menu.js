import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {

  render() {
    return (
        <nav>
          <Link to="/home">home</Link>
          <Link to="/perfilPage">Mi perfil</Link>
        </nav>
    );


  }
}
export default Menu;