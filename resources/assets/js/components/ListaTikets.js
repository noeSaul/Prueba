import React, { Component } from 'react';
import Api from '../lib/api';

class ListaTikets extends Component {
    constructor(props) {
        super(props);
        this.state = {estado: 0};

        this.handleChange = this.handleChange.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
    }

    handleChange(val, e) {
       
     val.estado=e.target.value;
      }

    handleClickOpen(ticket) {
        alert(JSON.stringify(val));
    }

    handleConfirm() {

        Api.post("/resolved", this.state.current).then(resp => {
            alert("Ticket marcado como resuelto");
            this.loadData();
            this.setState({ open: false });
        }).catch(ex => {
            this.setState({ open: false });
        });
    }

    handleClose() {
        this.setState({ open: false });
    }
    componentDidMount() {

        this.loadData();
    }
    handleClickOpen(ticket){
        this.setState({current:ticket})
    }


    loadData() {
        Api.get("/tikets").then(resp => {
            var lista = [];
           
            Api.get("/estados").then(est => {
                resp.forEach(ticket => {

           

                    lista.push(
                        <tr  key={ticket.id}>
                            <td >{ticket.id}</td>
                            <td >{ticket.nombre}</td>
                            <td >{ticket.descripcion}</td>
                            <td>
                            <select  onChange={(e) => this.handleChange(ticket, e)}>
                            {this.getelemet(est, ticket.estado)}
                            </select>
                            </td>
                            <td>
                               <button  onClick={() => this.handleClickOpen(ticket)} type="button" className="btn btn-primary">actualizar</button>
            
                            </td>
                        </tr>);


                    this.setState({ tickets: lista });

                });


            });


        });
    }
    getelemet(est, estado) {
        let chil = [];
        est.forEach(function (e) {
          
            if (e.id == estado) {
                
                chil.push(<option key={e.id} selected="selected" value={e.id}  >{e.descripcion}</option>)
            }
            else {
                chil.push(<option key={e.id} value={e.id}  >{e.descripcion}</option>)
            }
        });
        return chil;
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Estado</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {this.state.tickets}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default ListaTikets;