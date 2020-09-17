import http from "../http-common";

const getAll = () => {
    return http.get("/services");
};

const get = id => {
  return http.get(`/services/${id}`);
};


export default {
  getAll,
  get
};