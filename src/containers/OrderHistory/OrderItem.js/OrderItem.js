import React from 'react'
import { useHistory } from 'react-router-dom'
import ButtonLight from '../../../components/Button/ButtonSmall'
import Img64 from '../../../components/Img64/Img64'
import style from './OrderItem.module.css'
import { FaBackspace } from "react-icons/fa";

function OrderItem({title, desc, price, orderId, orderDate, adress, nip, fullname, tel, paymentType, paymentDate, img, goBack, products}) {
    const orderAgain = () => {
        // ZAMÓW JESZCZE RAZ
    } 
    const makeComplaint = () => {
        // REKLAMACJA 
    } 

    return (
        <div className={style.Item}>
            <h1 className={style.GoBack} onClick={goBack}><FaBackspace /></h1>

            <div className={style.FirstRow}>
                <div className={style.LeftContainer}>
                    <Img64 style={style.Img} data={img}></Img64>
                </div>
                <div className={style.RightContainer}>
                    <h1 className={style.Title}>{title}</h1>
                    <h2 className={style.Desc}>{desc}</h2>
                    <h2 className={style.Price}>{price} zł</h2>
                </div>
            </div>
            <div className={style.SecondRow}>
                <div className={style.LeftContainer}>
                    <h1 className={style.Info}>Dane</h1>
                    <p className={style.Text}>Nr zamówienia: {orderId}</p>
                    <p className={style.Text}>Data zamówienia: {orderDate}</p>
                    <p className={style.Text}>Adres: {adress}</p>
                    <p className={style.Text}>NIP: {nip}</p>
                    <p className={style.Text}>Imię i nazwisko: {fullname}</p>
                    <p className={style.Text}>Nr telefonu: {tel}</p>
                </div>
                <div className={style.RightContainer}>
                    <h1 className={style.Info}>Płatność</h1>
                    <p className={style.Text}>Zapłacono: {paymentType}</p>
                    <p className={style.Text}>Data opłacenia: {paymentDate}</p>
                    <h2 className={style.Info}> Kupione rzeczy: </h2>
                    { products.map(item => { 
                        return <p>Nazwa: {item.product.name}, {item.quantity} sztuk.</p>
                    })}
                </div>
            </div>
            
            <div className={style.ButtonsContainer}>
                <ButtonLight onclick={makeComplaint}>REKLAMACJA</ButtonLight>
                <ButtonLight onclick={orderAgain}>ZAMÓW ZNOWU</ButtonLight>
            </div>
        </div>
    )
}

export default OrderItem
