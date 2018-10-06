import React from 'react';
import './../Form.css';

/**
 * Arrow function es como decir
 *
 * var Nombre = function() {}
 */
var Nombre = (props) => {
  return (
    <div>
    <label>
      Nombre:
      <input id="name" name="nombre" type="text" placeholder ={props.placeholder} required/>
    </label>
    </div>
  );
}

export default Nombre;