import axios from "axios";

const baseUrl = "https://nc-marketplace-sem-2.onrender.com/api/";

export const fetchItems = () => {
  return axios.get(`${baseUrl}items`).then(({ data }) => {
    return data.items;
  });
};

export const postItem = (item) => {
  console.log(item);
  return axios
    .post(`https://nc-marketplace-sem-2.onrender.com/api/items`, item)
    .then(({ data }) => {
      return data.item;
    });
};

export const fetchItemById = (id) => {
  return axios.get(`${baseUrl}items/${id}`).then(({ data }) => {
    return data.item;
  });
};

export const fetchUsers = () => {
  return axios.get(`${baseUrl}users`).then(({ data }) => {
    return data.users;
  });
};
export const fetchUserByUserName = (userName) => {
  return axios.get(`${baseUrl}users/${userName}`).then(({ data }) => {
    return data.user;
  });
};

export const postUser = (user) => {
  return axios.post(`${baseUrl}users`, user).then(({ data }) => {
    return data.user;
  });
};

export const fetchBasketByUserName = (username) => {
  return axios.get(`${baseUrl}users/${username}/basket`).then(({ data }) => {
    return data.items;
  });
};
