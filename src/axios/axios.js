import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
});

export const getList = (responseList) => {
  apiUrl
    .get("")
    .then((response) => responseList(response))
    .catch((err) => err);
};
