// src/api/customerApi.js
import axiosClient from './axiosClient';

const tableApi = {
  getAll(params) {
    return axiosClient.get('/menu_categorys', { params });
  },

  // getById(id) {
  //   return axiosClient.get(`/tables/${id}`);
  // },

  // getByIdUser(id) {
  //   return axiosClient.get(`/user/get_customer`);
  // },

  // create(data) {
  //   return axiosClient.post('/tables', data);
  // },

  // update(id, data) {
  //   return axiosClient.put(`/tables/${id}`, data);
  // },

  // delete(id) {
  //   return axiosClient.delete(`/tables/${id}`);
  // },
};

export default tableApi;

