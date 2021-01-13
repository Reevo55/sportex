import React from 'react'
import ButtonLight from '../../../components/Button/ButtonLight'
import style from './ComplaintItem.module.css'

function ProductItem(props) {
    return (
        <div className={style.Item}>
            <div className={style.LeftContainer}>
                <h2>Nr zamówienia: {props.orderId}</h2>
                <p>Data zamówienia: {props.date} </p>
                <p>Status: {props.status} </p>
            </div>
            <div className={style.RightContainer}>
                <h2>Kwota: {props.price} zł </h2>

                <div>
                    <ButtonLight onclick={props.onclick}>SZCZEGÓŁY</ButtonLight>
                </div>
            </div>

            {props.selectable && <button className={style.select}>&nbsp;</button>}
        </div>
    )
}

export default ProductItem
