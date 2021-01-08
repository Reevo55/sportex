import React from 'react'
import Img64 from '../../../../components/Img64/Img64'
import style from './ItemHistory.module.css'
import ButtonSmall from '../../../../components/Button/ButtonSmall'

function ItemHistory(props) {
    return (
        <div key={props.id} className={style.Item}>
            <Img64 style={style.Img} data={props.img}></Img64>
            <div className={style.RightCont}>
                <div className={style.FirstRow}>
                    <h2 className={style.Title}>{props.title}</h2>
                    <h2 className={style.Price}>{props.price} zł</h2>
                </div>

                <h4 className={style.Desc}>{props.desc}</h4>
                <h4 className={style.OrderId}>Nr zamówienia: {props.orderId}</h4>
                <h4 className={style.OrderDate}>Data zamówienia: {props.orderDate}</h4>

                <div className={style.InfoBtn}>
                    <ButtonSmall onclick={(e) => props.orderClicked(e, props.id)}>INFO</ButtonSmall>
                </div>
            </div>
        </div>
    )
}

export default ItemHistory
