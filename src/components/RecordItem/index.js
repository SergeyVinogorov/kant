import React, { useState, useEffect } from 'react'
import { CHECKED } from "../../constants";
import cn from "classnames";

import { RecordItemDetail } from "../RecordItemDetail";
import './index.scss'



export const RecordItem = ({ item, isToday, isFirst }) => {
	const [isDetail, setIsDetail] = useState(false)
	useEffect(() => {
		if(isFirst){
			setIsDetail(true)
		}
	}, [])
	
	const checkStateClient =(clients)=>{
		const result = clients.filter(el => el.State === CHECKED)
		return result.length
	}

	return (
		<>
		{
			!isDetail ? (
			<div className={cn("kant-record-item", {"kant-record-item__tommorow": !isToday})} onClick={()=>setIsDetail(!isDetail)}>
				<div className="kant-record-item__description">
					<p className="kant-record-item__period">{ item.StartTime } - { item.EndTime }</p>
					<p className="kant-record-item__name">{item.Discipline}</p>
				</div>
				<p>{ item.Clients.length }/{ checkStateClient(item.Clients) }</p>
			</div>
			) : (
				<RecordItemDetail item={ item } isToday={isToday} click={()=>setIsDetail(!isDetail)}/>
			)
		}
		</>
	)
}

