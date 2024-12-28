import axios from "axios";

// used to if server is in use
// const Ports = import.meta.env.PORT || 3004;
const axiosInstance = axios.create({
  
  // deployed endpoint reference
  baseURL: "http://localhost:3004/api/",
});

export { axiosInstance };
