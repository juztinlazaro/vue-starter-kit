import axios from 'axios';

const instance = axios.create({
  baseURL: 'ducatus.user.auth',
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance;
