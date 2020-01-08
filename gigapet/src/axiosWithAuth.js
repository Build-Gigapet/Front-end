import axios from 'axios';
const axiosWithAuth = () => {
<<<<<<< HEAD
    const token = localStorage.getItem('token');
    return axios.create({
        baseUrl: "https://build-gigapet.herokuapp.com/api",
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
}
export default axiosWithAuth;
=======
  const token = localStorage.getItem("token");
  return axios.create({
    baseUrl: "https://build-gigapet.herokuapp.com",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
};
export default axiosWithAuth;
>>>>>>> Michael-Phelps
