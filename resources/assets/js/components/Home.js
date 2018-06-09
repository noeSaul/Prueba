import React, { Component } from 'react';
import Api from '../lib/api';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            open:false,
            current:{}
        };
    }


    handleClickOpen(ticket){
        this.setState({current:ticket})
        this.setState({ open: true });
    }

    handleConfirm(){
        
        Api.post("/resolved",this.state.current).then(resp => {
            alert("Ticket marcado como resuelto");
            this.loadData();
            this.setState({ open: false });
          }).catch(ex=>{
            this.setState({ open: false });
          });
    }

    handleClose(){
        this.setState({ open: false });
    }
    componentDidMount() {
 
        this.loadData();
    }

    loadData(){
        Api.get("/tikets").then(resp => {
            var lista = [];


            resp.forEach(ticket => {
                lista.push(
                    <tr key={ticket.id}>
                        <td >{ticket.id}</td>
                        <td >{ticket.nombre}</td>
                        <td >{ticket.descripcion}</td>
                        <td>  <span className={ticket.estado === "1" ? "badge badge-danger" : "badge badge-success"}>{ticket.estado}</span>
                        </td>
                        <td >{ticket.created_at}</td>
                        <td>
                       </td>
                    </tr>);
            });

            this.setState({ tickets: lista });
        });
    }

    render() {
        return (
            <div>
            <div className="container">


                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-12 col-sm-12">

           


                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">

                                    </th>
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

export default Home;