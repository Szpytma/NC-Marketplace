import axios from "axios";

const baseUrl = "https://nc-marketplace-sem-2.onrender.com/api/";

export const fetchItems = () => {
  return axios.get(`${baseUrl}/items`).then(({ data }) => {
    return data.items;
  });
};
