import loginApi from 'api/loginApi';
import LoginForm from 'features/Login/components/LoginForm';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchUsername } from './../../loginSlice';



MainPage.propTypes = {

};

function MainPage(props) {


    const [isLogin, setIsLogin] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {


        const token = localStorage.getItem('token');


        if (token) {
            setIsLogin(true);
        }

    }, []);



    const handleFinish = values => {
        loginApi.getToken(values).then(data => {

            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('username', data.username);
            setIsLogin(true);

            const action = fetchUsername({
                username: data.username
            });
            dispatch(action);
        });

    }


    return (
        <div className="login">

            {
                isLogin === true ? <Redirect to='/TraTu' /> : <LoginForm onFinish={handleFinish} />
            }


        </div>
    );
}

export default MainPage;