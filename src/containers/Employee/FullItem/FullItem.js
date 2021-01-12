import React from 'react'
import style from './FullItem.module.css'
import { FaBackspace } from "react-icons/fa";

function FullItem(props) {
    console.log(props.item)
    const handleProducts = () => {
        return props.lines.map((item, index) => {
            return <p key={index}>{item.product.name}, sztuk {item.quantity}</p>
        })
    }

    return (
        <div className={style.Item}>
            <h1 className={style.GoBack} onClick={props.goBack}><FaBackspace /></h1>
            <h1>ID: {props.id ? props.id  : props.item.consumerComplaintId}</h1>

            <h1>Produkty</h1>
            {handleProducts()}
            <h2>Data zamówienia: {props.item.order.delivery.createDate}</h2>
            <h2>Zamawiający: { props.item.order.addres.name } { props.item.order.addres.surname}</h2>
            <h2>Adres: </h2>
            <p>{ props.item.order.addres.city }</p>
            <p>{ props.item.order.addres.country }</p>
            <p>{ props.item.order.addres.telephone }</p>

            <h1>Opis</h1>
            <p>{ props.item.reason} </p>

            <div className={style.ButtonsContainer}>
                {props.children}
            </div>
        </div>
    )
}

export default FullItem
