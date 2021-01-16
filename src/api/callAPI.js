import axios from 'axios';



const callApi = (endpoint, method = 'get', body) => {

    const token = localStorage.getItem('token');
    return axios({

        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        headers: { Authorization: `Bearer ${token}` },


    }).catch(err => {
        console.log(err);
        window.location.href = "http://localhost:3000/login";
    })

}

export default callApi;