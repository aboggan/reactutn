import React, { Component } from 'react';
import './App.css';
//import Menu from './Menu';
import './Form.css';
import Home from './pages/Home';
import Registro from './pages/Registro'
import Perfiles from './pages/Perfiles'
import * as firebase from 'firebase'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAXzuPWGNh4Y2D-5Gs1NpLv6RWRch6O9mI",
  authDomain: "redsocialutn.firebaseapp.com",
  databaseURL: "https://redsocialutn.firebaseio.com",
  projectId: "redsocialutn",
  storageBucket: "redsocialutn.appspot.com",
  messagingSenderId: "996761598708"
};
firebase.initializeApp(config);

class App extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = {      
      usuarios: []
      /*El modelo de cada usuario va a quedar con esta estructura: 
        usuario
              id: (id autogenerado de firebase)
              data: 
                nombre: string
                email: string
                password: string
      */
    }
  }
  componentDidMount(){
    const nameRef = firebase.database().ref('usuarios')

    //Obtengo todos los usuarios y los guardo en el estado
    nameRef.once('value').then(snapshot => {
      let arr = [];

      snapshot.forEach(function(userSnap) {
        arr.push({id: userSnap.key, data : userSnap.val()})
      });

      this.setState({ usuarios: arr })
    })

    //Monitoreo cualquier cambio en la base para actualizar en tiempo real
    nameRef.on('value',(snapshot) =>{
      let arr = [];

      snapshot.forEach(function(userSnap) {
        arr.push({id: userSnap.key, data : userSnap.val()})
      });

      this.setState({ usuarios: arr })
    })
  }

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

  }
  render() {
    //TODO:  generar condicionales para mostrar registro, login o perfiles segun sea el caso.
    return (
      <div className="App">
        <div>
          
          <Perfiles usuarios = {this.state.usuarios}/> 

        </div>

      </div>
    );
  }


}

export default App;
