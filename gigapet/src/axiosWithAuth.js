import axios from 'axios';
const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
<<<<<<< HEAD
        baseUrl: "https://build-gigapet.herokuapp.com/api",
=======
        baseUrl: 'https://build-gigapet.herokuapp.com',
>>>>>>> a5e4912e28679851260674e2903c0afa74ea4390
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
}
export default axiosWithAuth;