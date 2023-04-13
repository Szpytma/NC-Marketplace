import axios from "axios";

const baseUrl = "https://nc-marketplace-sem-2.onrender.com/api/";

export const fetchItems = () => {
  return axios.get(`${baseUrl}/items`).then(({ data }) => {
    return data.items;
  });
};

export const fetchItemById = (id) => {
  return axios.get(`${baseUrl}/items/${id}`).then(({ data }) => {
    return data.item;
  });
};
