import axios from "axios";

const baseUrl = "https://nc-marketplace-sem-2.onrender.com/api/";

export const fetchItems = () => {
  return axios.get(`${baseUrl}/items`).then(({ data }) => {
    return data.items;
  });
};

//TODO
export const postItem = (itemToAdd) => {
  return axios.post(`${baseUrl}/items`).then(({ data }) => {
    return "";
  });
};

export const fetchItemById = (id) => {
  return axios.get(`${baseUrl}/items/${id}`).then(({ data }) => {
    return data.item;
  });
};
