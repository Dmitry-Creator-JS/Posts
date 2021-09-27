import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import '../styles/App.css'

const Auth = () => {
    return (
        <div className='auth'>
            <MyInput
                placeholder='Логин'

            />
            <MyInput
                placeholder='Пароль'
                type='password'

            />
            <MyButton> Enter </MyButton>
        </div>
    );
};

export default Auth;