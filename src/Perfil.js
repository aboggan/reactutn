import React from 'react';
import './Perfil.css';
import {Link} from 'react-router-dom';

const Perfil = (props) => {
  const perfil = props.perfil;
  return (
      <div className="profile-box">
        <div className="profile-list">
          <div className="card-body">
            <img src="" className="img-responsive img-circle" alt= {perfil.id} />

            <article className="name-box">
              <Link to={`../perfilPage/${perfil.id}`}>
                <h4>{perfil.name}</h4>
                <span>{perfil.username}</span>
              </Link>
              


            </article>
          </div>

      </div>
    </div>
  )
}

export default Perfil;


