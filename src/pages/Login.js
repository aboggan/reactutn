import React, { Component } from 'react';
import Email from '../formElements/Email';
import Password from '../formElements/Password';
import './Base.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('inicio de sesion');
  }
  render(){
    return(
      <section className="bg-image flex-container">
        <div className="form-content">
        <h3 className="form-signin-heading">Inicio Sesion</h3>
        <form className="box form-register" onSubmit={this.handleFormSubmit}>
          <Email placeholder="tumail@me.com"/>
          <Password placeholder="ingresa tu contraseña"/>
          <div className="center"><button onClick={this.handleFormSubmit}>Registrate</button></div>
        </form>
        </div>
      </section>
    )
  }
}
export default Login;

