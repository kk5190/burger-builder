import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilderreact-eebdc.firebaseio.com/'
});

export default instance;