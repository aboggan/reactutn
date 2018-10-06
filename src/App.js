import React, { Component } from 'react';
import './App.css';
//import Menu from './Menu';
import './Form.css';
import Home from './pages/Home';
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
  constructor(props) {
    super(props);
    this.state = {
      menuOpciones : ['recipes', 'inspiration', 'our brands']
    }
    console.log(firebase.database())
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
        <Home/>
        </div>

      </div>
    );
  }


}

export default App;
