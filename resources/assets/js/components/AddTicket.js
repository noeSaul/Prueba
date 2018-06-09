import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import {TextField} from '@material-ui/core';
import Api from '../lib/api';
// The Roster component matches one of two different routes
// depending on the full pathname
class AddTicket extends Component {

  constructor(props) {
    super(props);
    this.state = {
         nombre:'',
        descripcion:'',
        estado:0
    };
   
}

  handleName(estado) {
    this.setState({
      prioridad: estado
    });
}

  handleName(nombre) {
    this.setState({
      nombre: nombre
    });
}

handleDescription(description) {
    this.setState({
        descripcion: description
    });
}

handleChange (name,event) {
  this.setState({
    [name]: event.target.value,
  });
};

guardar() {

  if(this.state.nombre ==="" ||this.state.nombre ===undefined)
  {
    alert("completa la nombre");
    return;
  }

  if(this.state.estado ===0 ||this.state.estado ===undefined)
  {
    alert("completa la estado");
    return;
  }
  if(this.state.descripcion ==="" ||this.state.descripcion ===undefined)
  {
    alert("completa la descripcion");
    return;
  }



  var oj={ estado:  this.state.estado, descripcion: this.state.nombre,nombre: this.state.nombre }
  alert(JSON.stringify(oj));


  Api.post("tikets", oj )
    .then(resp => {alert("Ticket se Guardo");
    });
}

  render() {

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 col-sm-12">

          <form noValidate autoComplete="off">
          <div className="form-group">
        <TextField
          id="estado"
          label="estado"
          fullWidth
          value={this.state.estado}
          onChange={(x)=>this.handleChange('estado',x)}
          margin="normal"
        />
         </div>
         <div className="form-group">
        <TextField
          id="nombre"
          label="nombre"
          fullWidth
          value={this.state.prioridad}
          onChange={(x)=>this.handleChange('nombre',x)}
          margin="normal"
        />
         </div>
         <div className="form-group">
               <TextField
          id="descripcion"
          label="Descripción"
          fullWidth
          value={this.state.descripcion}
          onChange={(x)=>this.handleChange('descripcion',x)}
          margin="normal"
        />
        </div>
        <button onClick={() => this.guardar()} type="button" className="btn btn-primary">Guardar</button>
        </form>

          </div>
        </div>
      </div>

    )
  }
}






export default AddTicket
