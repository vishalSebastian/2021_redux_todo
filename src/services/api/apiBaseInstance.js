import axios from 'axios';
import { BASE_URL } from './constants';

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const customAxios = axios.create({
    baseURL:BASE_URL,
    timeout: 10000, 
    // headers: { 'api-key': 'eyJz-CI6Ikp-4pWY-lhdCI6' } // if any
});

// Step-2: Create request, response & error handlers
const requestHandler = request => {
   // token will be added here
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs';  
    return request;
};

const responseHandler = response => {
    if(response.status === 404){
        alert('bad request intercepted')
    }
    if (response.status === 401) {
        window.location = '/';
    }

    return response;
};

const errorHandler = error => {
    return Promise.reject(error);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
 );


// Step-4: Export the newly created Axios instance to be used in different locations.
export default customAxios;

