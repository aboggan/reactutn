import React, { Component } from 'react';
import Nombre from './formElements/Nombre';
import Email from './formElements/Email';
import FileUpload from './formElements/FileUpload';
import Ciudad from './formElements/Ciudad';
class Form extends Component {
  constructor(props){
    super(props);
    console.log('props perfil', props);
    this.state = {
      newUser: {
        nombre: '',
        email: '',
        selectedFile: {
          name: '',
          type: ''
        },
        ciudad: ''
      },

      ciudadesOpciones: ['Buenos Aires', 'La Plata', 'Rosario', 'Córdoba'],
      selectedFile: {
        name: '',
        type: ''
      }
    }
  }


  fileSelectedHandler (event) {
    const file = event.target.files[0];
    this.setState = ({
      selectedFile: {
        name: file.name,
        type: file.type
      }
    })
  }
  changeSelect(event) {
    event.preventDefault();
    this.setState({
      newUser: {ciudad: event.target.value}
    });
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('submit event');
  }

  render() {
   let ciudadesOpciones = this.state.ciudadesOpciones;
    console.log('ciudadesOp', ciudadesOpciones)
    return (
      <form className="Form box" onSubmit={this.handleFormSubmit}>
        <Nombre placeholder='Nombre'/>
        <Email placeholder="tumail@me.com"/>
        <FileUpload onChangeFile={this.fileSelectedHandler.bind(this)}
        fileInformation = {this.state.selectedFile}
        />
        <Ciudad onChangeSelect={this.changeSelect.bind(this)}
        placeholder={"Select  city"}
        options={this.state.ciudadesOpciones}
         />

        <button onClick={this.handleFormSubmit}>Enviar</button>

      </form>


    )
  }
}
export default Form;