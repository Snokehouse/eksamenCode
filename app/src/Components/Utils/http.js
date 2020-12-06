import Axios from 'axios';

const http = Axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
});

export default http;
