import React from 'react';
import './index.scss';

export const Loader = () => {
  return (
    <>
      <div className="kant-loader__back"></div>
      <div className="kant-loader">
		<div className="kant-loader__dot"></div>
		<div className="kant-loader__dot"></div>
		<div className="kant-loader__dot"></div>
	  </div>
    </>
  );
};