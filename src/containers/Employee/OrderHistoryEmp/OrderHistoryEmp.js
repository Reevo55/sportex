import React, { useEffect, useState } from 'react'
import style from '../Complaint.module.css'
import List from '../../Templates/Lists/List'
import ButtonLight from '../../../components/Button/ButtonLight'
import ProductItem from '../ComplaintItem/ProductItem'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import FullItem from '../FullItem/FullItem'
import BasicModal from '../../Templates/Modals/BasicModal'

function OrderHistoryEmp() {
    const [inPreperation, setInPreperation] = useState([])

    const [showItem, setShowItem] = useState(false)
    const [currItem, setCurrItem] = useState(0)
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
    const [currModal, setCurrModal] = useState('')

    const goBack = () => {
        setShowItem(false)
    }

    const manageStatus = () => {
        setOpenConfirmationModal(true)

        const changeStatus = () => {
            const order = inPreperation.find(item => item.orderId == currItem);

            axios.post(`api/Order/Status/${currItem}/${order.status == 'Do realizacji' ? 'Do wysłania' : 'Wyślij'}`).then(
                res => {
                    console.log(res)
                    fetchOrders()
                    setShowItem(false);
                }
            )
            setOpenConfirmationModal(false)
            
        }

        const modal = (
            <BasicModal
                title={'Jesteś pewny?'}
                text={'To twoja ostatnia szansa!'}
            >
                <ButtonLight onclick={changeStatus}>OK</ButtonLight>
                <ButtonLight onclick={() => setOpenConfirmationModal(false)} >WRACAM</ButtonLight>
            </BasicModal>
        )

        setCurrModal(modal)
    }

    const showProduct = () => {
        const order = inPreperation.find(item => item.orderId == currItem);
        console.log(currItem)
        console.log(order)
        if (order) {
            return (
                <FullItem
                    goBack={goBack}
                    lines={order.lines}
                    item = {{order}}
                    id = {order.orderId}>
                        {order.status != 'Wyślij' && <ButtonLight onclick={manageStatus}>Ustaw: {order.status == 'Do realizacji' ? 'Do wysłania' : 'Wyślij'}</ButtonLight>}
                </FullItem>)
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [])


    const fetchOrders = () => {
        axios.get('api/Orders').then(res => {
            const ordersInPreparation = res.data
            console.log('robie sie')
            console.log(ordersInPreparation);

            setInPreperation(ordersInPreparation)
        })
    }

    const openItem = (id) => {
        setCurrItem(id)
        setShowItem(true)
    }

    const handleOrdersInPrep = () => {
        return inPreperation.map(item => {
            return <ProductItem
                key={item.orderId}
                orderId={item.orderId}
                date={item.delivery.createDate}
                price={item.payment.totalSum}
                onclick={() => openItem(item.orderId)}
                status={item.status}
            ></ProductItem>
        })
    }

    return (
        <>
            <h1 className={style.Title}>Historia zamówień</h1>
            <List>
                {showItem ? showProduct() : handleOrdersInPrep()}

                {openConfirmationModal && currModal}
            </List>
        </>
    )
}

export default OrderHistoryEmp