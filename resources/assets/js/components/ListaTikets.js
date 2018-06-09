import React, { Component } from 'react';
import Api from '../lib/api';
import { ActionCreators } from '../redux/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class ListaTikets extends Component {
    constructor(props) {
        super(props);
        this.state = { estado: 0 };
        this.handleChange = this.handleChange.bind(this);
        this.actualizar = this.actualizar.bind(this);
    }
    handleChange(val, e) {

        val.estado = e.target.value;
    }

    actualizar(ticket) {
        Api.post("tiketsup", ticket)
            .then(resp => {
                alert("Ticket se actualizo");
            });
    }



    componentDidMount() {

        this.cargar();
    }



    cargar() {
        Api.get("/tikets").then(resp => {
            var lista = [];

            Api.get("/estados").then(est => {
                resp.forEach(ticket => {
                    lista.push(
                        <tr key={ticket.id}>
                            <td >{ticket.id}</td>
                            <td >{ticket.nombre}</td>
                            <td >{ticket.descripcion}</td>
                            <td>
                                <select onChange={(e) => this.handleChange(ticket, e)}>
                                    {this.getelemet(est, ticket.estado)}
                                </select>
                            </td>
                            <td>
                                <button onClick={() => this.actualizar(ticket)} type="button" className="btn btn-primary">actualizar</button>

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

const mapStateToProps = (state, ownProps) => {
    return {

        //aqui cae los estados que se persisten
        defaultData: state.defaultData
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ListaTikets);