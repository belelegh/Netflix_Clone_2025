// In a separate file like axios.js or api.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// import axios from "axios";
// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
// });
// export default instance;
// const url = 'https://api.themoviedb.org/3/authentication';
