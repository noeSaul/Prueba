import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import config from '../configureStore'

ReactDOM.render(
    (<Provider store={config.store} >
        <PersistGate loading={null} persistor={config.persistor}>
            <BrowserRouter>
                 <App />
            </BrowserRouter>
        </PersistGate >
    </Provider >),
  document.getElementById('root')
);



/*class Main extends Component {
 
    constructor() {
     
      super();
      this.state = {
          products: [],
      }
    }
   
    componentDidMount() {
      fetch('/api/tikets')
          .then(response => {
              return response.json();
          })
          .then(products => {
              this.setState({ products });
          });
    }
   
   renderProducts() {
      return this.state.products.map(product => {
          return (
              <div>

                    <li key={product.id} >
                        { product.descripcion } 
                    </li>  
              </div>

                 
          );
      })
    }
     
    render() {
      return (
          <div>
                <ul>
                  { this.renderProducts() }
                </ul> 
              </div> 
         
      );
    }
  }
 
export default Main;
 
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}*/