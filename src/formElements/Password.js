import React from 'react';
import './../Form.css';

var Password = (props) => {
  return (
    <div>
      <label>
        Password
        <input id="password" type="password" name="password" placeholder= {props.placeholder} required />
      </label>
    </div>
  )
}

export default Password;
