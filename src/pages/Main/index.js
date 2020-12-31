import React, { useEffect, useState } from 'react';
import useRecordContext from "../../context/recordContext";

import { auth } from "../../api/auth";
import { parseCookies } from 'nookies'

import { Loader } from "../../components/Loader";

import { RecordItem } from "../../components/RecordItem";
import { TODAY } from '../../constants';


import './index.scss'

export const Main = () => {
  const { recordPage = null, setRecordPage } = useRecordContext();
  const [list, setList] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
	const [error, setError] = useState('');


  useEffect(() => {
		setIsLoad(true);
		const cookies = parseCookies();
		if (!recordPage) {
			init(cookies)
		}else{
			if(recordPage.length){
				setList(recordPage)
				setIsLoad(false)
			}else{
				setIsLoad(true)
			}
		}
	}, []);

	const init =(cookies)=>{
		let params = JSON.parse(cookies?.authData)
		auth(params)
		.then((response) => {
			if (response.data.Success) {
			  setRecordPage(response.data.schedule)
				setList(response.data.schedule)
			}else{
					throw new Error(`The response return not success: Texterror ${ response.data.TextError }`)
			}
			setIsLoad(false);
		  })
		  .catch((error) => {
				setIsLoad(false);
				setError('Ошибка сервера');
				console.error(error);
		  });
	}

  return (
    <main className="kant-main">
		{error && <div className="kant-main__error">{error}</div>}
		{isLoad && <Loader />}
		{
			list.length && list.map((el, i)=>{
				return (
					<div key={i}>
					<h2 className="kant-record__title">{ el.PeriodDay }</h2>
					{
						el.data.length && el.data.map((element, index) => {
							return ( <RecordItem key={`itemSchedule` + index } item={ element } isToday={ el.PeriodDay === TODAY } isFirst={ index === 0 && i === 0 }/>)
						})
					}
					</div>
				)
			})
		}
    </main>
  )
}
