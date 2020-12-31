import React from 'react'
import { Link } from 'react-router-dom';
import './index.scss';
import logo from '../../images/logo.png'

export const Header = () =>{
	return (
		<header className="kant-header">
			<Link to={'/'} className="kant-logo" >
				<img src={logo} />
			</Link>
		</header>
	)
}