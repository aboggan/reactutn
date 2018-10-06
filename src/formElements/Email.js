import React from 'react';
import './../Form.css';

var Email = (props) => {
  return (
    <div>
    <label>
      Mail
    <input id="email" type="email" placeholder={props.placeholder} name="email"  pattern=".+@gmail.com" required/>
    </label>
    </div>
  );
}

export default Email;