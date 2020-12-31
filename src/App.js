import React, { useEffect, useState } from 'react';

import { parseCookies } from 'nookies';

import { BrowserRouter} from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';
import useAuthContext from './context/authContext';

import { Login } from './pages/Login/';
import { Main } from './pages/Main/';
import { Header } from "./components/Header";

import { PrivateRoute } from "./components/PrivateRoute";


export const App = () => {
	const cookies = parseCookies();
	const [init, setInit] = useState(false);
	const { authData = null, setAuthData } = useAuthContext();
  
	useEffect(() => {
	  setAuthData(cookies?.authData);
	  setInit(true);
	}, [authData]);
  
	if (!init) return null;
  return (
    <BrowserRouter>
	  <Header />
	  <Switch>
		<PrivateRoute
			path="/"
			exact
			auth={authData}
			component={Main}
		/>
		<PrivateRoute path={'/'} exact auth={authData} component={Main} />
		{!authData && <Route strict path="/login" component={Login} />}
		<Redirect to={"/"} />
	  </Switch>
	</BrowserRouter>
  );
}

export default App;
