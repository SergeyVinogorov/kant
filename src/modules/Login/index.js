import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { InputField } from '../../components/Form/InputField';
import { Button } from '../../components/Button';
import { setCookie } from 'nookies';

import { validate } from '../../utilities/validator';
import { auth } from '../../api/auth';

import { useLogin } from './state';

import useRecordContext from "../../context/recordContext";
import useAuthContext from "../../context/authContext";

import './index.scss'

export const Login = withRouter(({ history }) => {
  const { setRecordPage } = useRecordContext();
  const { setAuthData } = useAuthContext();

  const login = useLogin();

  const [error, setError] = useState('');
  const [load, setLoad] = useState(false);

  const { tel, password } = login;

  const sendForm = () => {
	  setLoad(true)
    if (validate(login)) {
      auth({
        Login: tel.value,
        password: password.value,
			})
			.then((response) => {
        if (response.data.Success) {
					let params = {
						Login: tel.value,
						password: password.value,
					}
					setCookie(null, 'authData', JSON.stringify(params), {
									maxAge: 400 * 24 * 60 * 60,
									path: '/',
						});
					setAuthData(true);
					setRecordPage(response.data.schedule)
					history.push('/');
				}else{
					throw new Error(`The response return not success: Texterror ${ response.data.TextError }`)
				}
				setLoad(false)
			})
			.catch((error) => {
					console.error(error);
					setError('Ошибка сервера');
					setLoad(false)
				});
    }else{
		setError('Данные введены не корректно')
		setTimeout(() => {
			setLoad(false)
		}, 2000);
	}
  };

  return (
    <form className="kant-form" onSubmit={(event) => event.preventDefault()}>
		{error && <div className="kant-form__error">{error}</div>}
		<InputField {...tel.bind} />
		<InputField type="password" {...password.bind} />
		<div className="kant-form__submit">
			<Button isLoad={load} title="Войти" onClick={sendForm} />
		</div>
    </form>
  );
});