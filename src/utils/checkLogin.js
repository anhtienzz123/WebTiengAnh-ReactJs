import loginApi from 'api/loginApi';

const checkLogin = () => {

    const token = localStorage.getItem('token');


    if (!token) {
        window.location.href = "http://localhost:3000/DangNhap";
    }

    // kiểm tra đã hết hạn token hay chưa
    loginApi.getUsername().then(data => {
        localStorage.setItem('username', data);
    }).catch(err => {
        window.location.href = "http://localhost:3000/DangNhap";
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    });;

}

export default checkLogin;