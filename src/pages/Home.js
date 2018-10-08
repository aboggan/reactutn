import React, {Component} from 'react';
import Perfiles from './Perfiles';
import '../Perfil.css';
import Registro from './Registro'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
     users: []
    }
    this.handleFormSubmit=this.handleFormSubmit.bind(this)
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let name = event.target.name.value
    let email = event.target.email.value
    let password = event.target.password.value
    /*let newUser= {nombre: name,
                  email: email,
                  password: password}

    this.setState({
            users: [...this.state.users,newUser]                
    })   */

    console.log(name)
  }
  render() {
    
      return (
        <div className="flex-container bg-color">
            <div className="flex-item">
             
              <Registro agregarUsuario={this.handleFormSubmit} usuarios={this.state.users}/>

            </div>
            <div className="flex-item">columna 2</div>
            <div className="flex-item">columna 3</div>
        </div>
      )

  }
}

export default Home;


