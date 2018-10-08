import React from 'react';
import './Perfil.css';
import {Link} from 'react-router-dom';

const Perfil = (props) => {
  const perfil = props.perfil;

  return (
      <div className="profile-box">
        <div className="profile-list">
          <div className="card-body">
            <article className="name-box">
              <Link to={`../perfilPage/${props.uid}`}>
                <h4>{perfil.nombre}</h4>
              </Link>
            </article>
          </div>

      </div>
    </div>
  )
}

export default Perfil;


