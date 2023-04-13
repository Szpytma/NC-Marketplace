import axios from "axios";

const baseUrl = "https://nc-marketplace-sem-2.onrender.com/api/";

export const fetchItems = () => {
  return axios
    .get(`https://nc-marketplace-sem-2.onrender.com/api/items`)
    .then(({ data }) => {
      return data.items;
    });
};
