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
  render() {
    
      return (
        <section className="profile">
          {this.props.usuarios.map(
            perfil =>
            <Perfil perfil = {perfil.data} uid= {perfil.id} key ={perfil.id}/>)
          }
        </section>
      )
    
  }
}
export default Perfiles;








