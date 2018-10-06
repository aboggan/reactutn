import React, { Component } from 'react';
import Nombre from '../formElements/Nombre';
import Email from '../formElements/Email';
import Password from '../formElements/Password';
import './Base.css';

class Registro extends Component {
 
  render(){
    return(
      <section className="bg-image flex-container">
        <div className="form-content">
        <h3 className="form-signin-heading">Registrate</h3>
        <form className="box form-register" onSubmit={this.props.agregarUsuario}>
          <Nombre placeholder='Nombre'/>
          <Email placeholder="tumail@me.com"/>
          <Password placeholder="ingresa un password"/>
          <div className="center"><button type="submit">Registrate</button></div>
        </form>
        </div>
      </section>
    )
  }
}
export default Registro;

