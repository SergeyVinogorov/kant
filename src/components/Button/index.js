import React from 'react';
import "./index.scss";

export const Button = ({
  children,
  title,
  onClick,
  isLoad=false
}) => (
  <button
		 onClick={onClick}
		 className="kant-button"
  >
	{
		isLoad ? (    <>
		<div className="kant-button__loader-back"></div>
			<div className="kant-button__loader">
			  <div className="kant-button__loader-dot"></div>
			  <div className="kant-button__loader-dot"></div>
			  <div className="kant-button__loader-dot"></div>
			</div>
		  </>
		  ) : <div className="kant-button__title">{children ? children : title}</div>
	}
  </button>
);
