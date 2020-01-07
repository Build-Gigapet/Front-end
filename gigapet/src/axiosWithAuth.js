import axios from "axios";
const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseUrl: "https://build-gigapet.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    })
}
export default axiosWithAuth;