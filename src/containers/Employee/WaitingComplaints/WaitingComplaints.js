import React, { useEffect, useState } from 'react'
import List from '../../Templates/Lists/List'
import ComplaintItem from '../ComplaintItem/ComplaintItem'
import style from '../Complaint.module.css'
import ButtonLight from '../../../components/Button/ButtonLight'
import FullItem from '../FullItem/FullItem'
import axios from 'axios'
import BasicModal from '../../Templates/Modals/BasicModal'

function WaitingComplaints(props) {
    const [items, setItems] = useState(props.complaints)

    const [showItem, setShowItem] = useState(false)
    const [currItem, setCurrItem] = useState(0)

    const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
    const [currModal, setCurrModal] = useState('')

    const goBack = () => {
        setShowItem(false)
    }

    const openItem = (id) => {
        setCurrItem(id)
        setShowItem(true)
    }

    useEffect(() => {
        props.fetch()
    },[showItem, openConfirmationModal])
    
    const acceptComplaint = () => {
        setOpenConfirmationModal(true)
        const accept = () => {
            axios.post(`api/ConsumerComplaint/${currItem}/${1}`).then(
                res => {
                    props.fetch()
                    setShowItem(false)
                }
            )
            setOpenConfirmationModal(false)
        }

        const modal = (
            <BasicModal
                title={'Jesteś pewny?'}
                text={'To twoja ostatnia szansa!'}
            >
                <ButtonLight onclick={accept}>OK</ButtonLight>
                <ButtonLight onclick={() => setOpenConfirmationModal(false)} >WRACAM</ButtonLight>
            </BasicModal>
        )
        setCurrModal(modal)

    }

    const rejectComplaint = () => {
        setOpenConfirmationModal(true)
        const reject = () => {
            axios.post(`api/ConsumerComplaint/${currItem}/${2}`).then(
                res => {
                    props.fetch()
                    setShowItem(false)
                }
            )
            setOpenConfirmationModal(false)

        }

        const modal = (
            <BasicModal
                title={'Jesteś pewny?'}
                text={'To twoja ostatnia szansa!'}
            >
                <ButtonLight onclick={reject}>OK</ButtonLight>
                <ButtonLight onclick={() => setOpenConfirmationModal(false)} >WRACAM</ButtonLight>
            </BasicModal>
        )

        setCurrModal(modal)
        props.fetch()
    }

    const itemHandler = () => {
        return (
            <FullItem goBack={goBack} item={items.find(item => item.consumerComplaintId == currItem)} lines={items.find(item => item.consumerComplaintId == currItem).order.lines}>
                <ButtonLight onclick={acceptComplaint}> Zaakceptuj </ButtonLight>
                <ButtonLight onclick={rejectComplaint}> Odrzuć </ButtonLight>
            </FullItem>
        )
    }

    const handleItems = () => {
        return items.map((item, index) => {
            return (
                <ComplaintItem
                    key={item.consumerComplaintId}
                    id={item.consumerComplaintId}
                    selectable={false}
                    openItem={openItem}
                    orderId={item.order.orderId}
                    date={item.updateDate}
                    price={item.order.payment.totalSum}
                    status={'Waiting'}
                />
            )
        })
    }


    return (
        <>
            <h1 className={style.Title}>Oczekujące reklamacje</h1>
            <List>
                {showItem ? itemHandler() : handleItems()}
                {openConfirmationModal && currModal}
            </List>
        </>
    )
}

export default WaitingComplaints
