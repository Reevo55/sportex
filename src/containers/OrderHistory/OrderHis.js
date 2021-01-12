import React, { useEffect, useState } from 'react'
import style from './OrderHis.module.css'
import Bar from '../Templates/Bar/Bar'
import List from '../Templates/Lists/List'
import ItemHistory from '../Templates/Lists/ItemHistory/ItemHistory'
import OrderItem from './OrderItem.js/OrderItem'
import axios from 'axios'

function OrderHis() {
    const [showItemComponent, setShowIntemComponent] = useState(false)
    const [currOrderId, setCurrOrderId] = useState()
    const [history, setHistory] = useState([])


    const orderClicked = (event, id) => {
        console.log('clicked')
        console.log(id)
        setCurrOrderId(id)
        setShowIntemComponent(true)
    }

    useEffect(() => {
        axios.get('https://localhost:44338/api/Orders/client/2').then(
            res => {
                console.log(res.data)
                setHistory(res.data)
            }
        )
    }, [])

    const goBack = () => {
        setShowIntemComponent(false)
    }

    const handleItem = () => {
        const item = history.find(item => item.orderId == currOrderId);

        if (item != undefined) {
            return (
                <OrderItem
                    title={`Zamówienie nr ${item.orderId}`} desc='Twoje zamówienie' price={item.payment.totalSum} orderId={item.orderId}
                    orderDate={item.delivery.createDate} adress={item.addres.city + ' ' + item.addres.country} nip='124214125' fullname={item.addres.name + ' ' + item.addres.surname} tel={item.addres.telephone}
                    paymentType='Transfer' paymentDate={item.payment.dateOfPayment} img={item.lines[0].product.image}
                    goBack={goBack} products={item.lines}
                />
            )
        }
        else return <h1>Error</h1>;
    }

    const handleItems = () => {
        return history.map(item => {
            return (
                <ItemHistory key={item.orderId} id={item.orderId} title={`Zamówienie nr ${item.orderId}`} price={item.payment.totalSum}
                    desc={'Twoje zamówienie'} img={item.lines[0].product.image}
                    orderId={item.orderId}
                    orderDate={item.delivery.createDate}
                    orderClicked={orderClicked}
                />
            )
        })
    }

    const handleContainer = () => {
        if (showItemComponent) {
            return (
                handleItem()
            )
        }
        else {
            return (
                <List>
                    {handleItems()}
                </List>
            )
        }
    }

    return (
        <div className={style.MainContainer}>
            <Bar />

            <div className={style.RightContainer}>
                <h1 className={style.Title}>Historia zamówień</h1>

                {handleContainer()}
            </div>
        </div>
    )
}

export default OrderHis
