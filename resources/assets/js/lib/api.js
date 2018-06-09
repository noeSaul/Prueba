import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        'Content-Type': 'application/json',
    }
});
api.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 401) {
          
        }

        if (error.response.status === 403) {
            
            alert("No autorizado");
            
        }

        if (error.response.status === 500) {

            alert("Error Servidor 500");
            console.log(error.response);
        }

      
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        alert("Lo siento ocurrio un error");
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
       
        console.log('Error', error.message);
    }




    return Promise.reject(error);
});
export default api;
