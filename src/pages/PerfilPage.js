import React, {Component} from 'react';
import '../Perfil.css';
import * as firebase from 'firebase'

class PerfilPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfil: {}
    }
  }

  componentWillMount() {
    const nameRef = firebase.database().ref('usuarios').child(this.props.match.params.id)

    nameRef.once('value').then(snapshot => {
      //seteo el estado con el perfil
      this.setState({perfil: snapshot.val()})
    })
  }

  render() {
    
    return (
    
      <section className="profile">
        <div className="info">
            <ul className="list">
              <li>
                  <div className="detail-info">
                    <h4>Nombre</h4>
                    <div>{this.state.perfil.nombre}</div>
                  </div>
                </li>
                <li>
                  <div className="detail-info">
                    <h4>Email</h4>
                    <div>{this.state.perfil.email}</div>
                  </div>
                </li>
            </ul>
        </div>
      </section>
    )

  }
}

export default PerfilPage;

