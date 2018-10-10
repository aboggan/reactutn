import React, { Component } from 'react';
import Nombre from '../formElements/Nombre';
import Email from '../formElements/Email';
import Password from '../formElements/Password';
import './Base.css';
import * as firebase from 'firebase'

class Registro extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    
    let name = event.target.name.value
    let email = event.target.email.value
    let password = event.target.password.value
    var usuariosDB = firebase.database().ref().child('usuarios');
    
    let usuario = { 
                    nombre: name,
                    email: email,
                    password: password}
    
    usuariosDB.push( usuario );
    alert("Usuario registrado con exito!")
    event.target  = null

  }
  render(){
    return(
      <section className="bg-image flex-container">
        <div className="form-content">
        <h3 className="form-signin-heading">Registrate</h3>
        <form className="box form-register" onSubmit={this.handleFormSubmit}>
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

