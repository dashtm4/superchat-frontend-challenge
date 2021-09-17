import axios from 'axios'

import { API } from './api';

const fetchServices = () => {
  return axios.get(API.fetchServices);
}

export {
  fetchServices,
};
