import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:23000/services-layer',
  timeout: 30000,
})

api.interceptors.request.use(
  (config) => {
   /* const token = UserService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }*/
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token');
      window.location.href = '/';
    }
    if (error.response?.status === 406) {
      //alertService.error(error.response?.data.details[0]);
      console.error(error.response?.data?.message);
    }
    return Promise.reject(error);
  }
);

export default api;