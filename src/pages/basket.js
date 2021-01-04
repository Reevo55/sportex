import React from 'react'
import style from "./basket.module.css";
import BasketIn from '../containers/Basket/Basket'

function Basket() {
    return (
        <section className={style.Basket}>
            <BasketIn/>
        </section>
    )
}

export default Basket
