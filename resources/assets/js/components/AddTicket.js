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
         prioridad:0,
        estado:'',
        descripcion:''
    };
   
}

  handleName(estado) {
    this.setState({
      prioridad: estado
    });
}

  handleName(prioridad) {
    this.setState({
      prioridad: prioridad
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

  if(this.state.prioridad ===0 ||this.state.estado ===undefined)
  {
    return;
  }

  if(this.state.estado ==="" ||this.state.estado ===undefined)
  {
    return;
  }
  if(this.state.descripcion ==="" ||this.state.descripcion ===undefined)
  {
return;
  }
  Api.post("/tikets", { estado: this.state.estado, descripcion: this.state.descripcion,prioridad: this.state.prioridad })
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
          id="prioridad"
          label="prioridad"
          fullWidth
          value={this.state.prioridad}
          onChange={(x)=>this.handleChange('prioridad',x)}
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
