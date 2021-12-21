import axios from "axios";

// https://stackoverflow.com/questions/47076743/cors-anywhere-herokuapp-com-not-working-503-what-else-can-i-try
// "https://limitless-taiga-95649.herokuapp.com/https://www.metaweather.com/api/",

const api = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/",

});

export default api;
