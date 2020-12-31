import React from 'react';
import './index.scss'

import { Login as LoginForm } from '../../modules/Login';


export const Login = ({passedState}) => {
  return (
    <div className="kant-login">
      <div className="kant-login__container">
        <LoginForm passedState={passedState}/>
      </div>
    </div>
  );
}
