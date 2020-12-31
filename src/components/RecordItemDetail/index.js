import React from 'react'
import cn from "classnames";
import { CHECKED } from "../../constants";

import "./index.scss";

export const RecordItemDetail = ({ item, click }) => {
	const checkStateClient =(clients)=>{
		const result = clients.filter(el => el.State === CHECKED)
		return result.length
	}
	return (
		<div className="kant-record-item__detail" onClick={()=>click()}>
			<div className="kant-detail__header">
				<div className="kant-detail__header-wrapper">
					<div className="kant-record-item__description-detail">
						<p className="kant-record-item__period-detail">{ item.StartTime } - { item.EndTime }</p>
						<p className="kant-record-item__name-detail">{item.Discipline}</p>
					</div>
					<p>{ item.Clients.length }/{ checkStateClient(item.Clients) }</p>
				</div>
				<p className="kant-record-item__name kant-indent--bottom">Возраст: { item.AgeGroup }</p>
				<p className="kant-record-item__name">Уровень: { item.Level }</p>
			</div>
			<div className="kant-detail__header-detail">
				<p className="kant-indent--bottom">Место встречи: { item.Venue }</p>
				<p>Место тренировки: { item.Location }</p>
			</div>
			{
				item.Clients.map((el, i)=>{
					return ( 
						<div key={'detail' + i} className="kant-detail__customer">
							<div className="kant-detail__customer-text kant-indent--right">
								<p className="kant-detail__customer-text-name kant-indent--bottom">{el.FIO}</p>
								<p className="kant-detail__customer-text-phone" ><a href={`tel:${el.Telephone}`}>{el.Telephone}</a></p>
							</div>
							<div className={cn('kant-detail__mark kant-detail__yellow', {'kant-detail__green': el.State === CHECKED})}>
								{el.State}
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

