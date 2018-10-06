import React, {Component} from 'react';
import '../Perfil.css';

class PerfilPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfil: {name: "",
              email: "",
              address:""}
    }
  }

  componentWillMount() {
  
    fetch('https://jsonplaceholder.typicode.com/users/'+this.props.match.params.id)
      .then(response => response.json())
      .then(
      (result) => {
        console.log('resultado', result)
        this.setState({
          
          perfil:{
            name: result.name,
            email: result.email,
            address: result.address.street + " " +result.address.suite
          },

        })
      },
      (error) => {
        console.log('error en request:',error)
       
      }
    )

  }

  render() {
    
    const perfil = this.state.perfil
    console.log(perfil.address)
    const address = perfil.address
    console.log(address);
    return (
    
      <section className="profile">
        <div className="info">
            <ul className="list">
              <li>
                  <div className="detail-info">
                    <h4>Nombre</h4>
                    <div>{perfil.name}</div>
                  </div>
                </li>
                <li>
                  <div className="detail-info">
                    <h4>Email</h4>
                    <div>{perfil.address}</div>
                  </div>
                </li>
            </ul>
        </div>
      </section>
    )

  }
}

export default PerfilPage;

