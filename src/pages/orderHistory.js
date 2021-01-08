import React from 'react'
import OrderHis from '../containers/OrderHistory/OrderHis'
import style from './orderHistory.module.css'

function OrderHistory() {
    return (
        <section className={style.History}>
            <OrderHis/>
        </section>
    )
}

export default OrderHistory
