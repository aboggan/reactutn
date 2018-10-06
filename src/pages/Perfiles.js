import React, {Component} from 'react';
import Perfil from '../Perfil';
import '../Perfil.css';

class Perfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      isLoaded: false,
      perfiles: []
    }
  }

 
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('registro enviado');
  }

  
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(
      (result) => {
        console.log('resultado', result);
        this.setState({
          isLoaded:true,
          perfiles:result,
          perfil: {}
        })
      },
      (error) => {
        console.log('error en request:',error);
        this.setState({
          isLoaded:true,
          error:true
        })
      }
    )
  }
  render() {
    const { error, isLoaded, perfiles} = this.state;
   
        if (error) {
      return (
        <div>{error.message}</div>
      )
    } else if(!isLoaded) {
      return (
      <div><h2>Loading...</h2></div>
      )
    } else {
      return (
        <section className="profile">
          {perfiles.map(
            perfil =>
            <Perfil perfil = {perfil} key ={perfil.id}/>)
          }
        </section>
      )
    }
  }
}
export default Perfiles;








