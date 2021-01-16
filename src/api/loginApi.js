import axiosClient from './axiosClient';

const loginApi = {

    getToken: values => {

        const url = '/api/login';
        return axiosClient.post(url, values);
    },
    getUsername: () => {

        const url = '/api/getUsername';
        return axiosClient.get(url);
    },

};

export default loginApi;