import axios from "axios";

// https://stackoverflow.com/questions/47076743/cors-anywhere-herokuapp-com-not-working-503-what-else-can-i-try

const api = axios.create({
  baseURL:
    "https://limitless-taiga-95649.herokuapp.com/https://www.metaweather.com/api/",

});

export default api;
