import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f24ab71efac34a1cb72826bb0162f335",
  },
});
