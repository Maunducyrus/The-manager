// import axios from "axios";

// export default axios.create({
//     baseURL: "https://localhost:3006",
// })

import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3006" // Change this URL to match your backend
});
