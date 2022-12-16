import axios from 'axios'

const api = axios.create({
});

api.interceptors.request.use((response) => {
  return response;
}, (error) => {
  console.log('ERROR', error)
  return Promise.reject(error);
}
)


export { api }