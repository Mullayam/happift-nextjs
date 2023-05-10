import axios from "axios"

const Axios = axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
})
export default Axios
