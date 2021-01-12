import React, { useState } from 'react'
import style from '../Complaint.module.css'
import List from '../../Templates/Lists/List'
import ComplaintItem from '../ComplaintItem/ComplaintItem'
import ButtonLight from '../../../components/Button/ButtonLight'
import FullItem from '../FullItem/FullItem'

function NegativeComplaints(props) {
    const [items, setItems] = useState(props.complaints)
    const [selectedItems, setSelectedItems] = useState([])

    const [showItem, setShowItem] = useState(false)
    const [currItem, setCurrItem] = useState(0)

    const goBack = () => {
        setShowItem(false)
    }

    const openItem = (id) => {
        setCurrItem(id)
        setShowItem(true)
    }

    const itemHandler = () => {
        return (
            <FullItem
                goBack={goBack} item={items.find(item => item.consumerComplaintId == currItem)} lines={items.find(item => item.consumerComplaintId == currItem).order.lines}>
            </FullItem>)
    }


    const handleItems = () => {
        return items.map((item, index) => {
            return (
                <ComplaintItem
                    key={item.consumerComplaintId}
                    id={item.consumerComplaintId}
                    selectable={true}
                    selected={isSelected(item)}
                    onclick={selectItem}
                    openItem={openItem}
                    orderId={item.order.orderId}
                    date={item.updateDate}
                    price={item.order.payment.totalSum}
                    status={'Waiting'} />
            )
        })
    }

    const isSelected = (complaint) => {
        if (selectedItems.findIndex(item => item === complaint.consumerComplaintId) != -1) {
            console.log('so it is')
            return true;
        }
        else return false;
    }


    const selectItem = (id) => {
        console.log(id)
        const items = [...selectedItems];
        const index = items.findIndex(item => item == id);


        if (index != -1) {
            console.log('usuwam')
            
            items.splice(index, 1)
            console.log(items)
            setSelectedItems(items)
        }
        else {
            console.log('dodaje')
            items.push(id)
            console.log(items)
            setSelectedItems(items)
        }

        console.log(items)
    }

    const selectAll = () => {
        const selected = []

        items.forEach((item) => {
            selected.push(item.consumerComplaintId)
        })

        setSelectedItems(selected)
    }


    const deleteSelected = () => {
        console.log('Deletation')
        let complaintsAfterDelete = [...items]
        complaintsAfterDelete = complaintsAfterDelete.filter(item => !selectedItems.includes(item.consumerComplaintId))
    
        setItems(complaintsAfterDelete)
        console.log(complaintsAfterDelete)
    }

    return (
        <>
            <h1 className={style.Title}>Odrzucone reklamacje</h1>
            <List>
                {showItem ? itemHandler() : handleItems()}
            </List>

            <div className={style.Summary}>
                <ButtonLight onclick={deleteSelected}>Usuń zaznaczone</ButtonLight>
                <ButtonLight onclick={selectAll}>Zaznacz wszystkie</ButtonLight>
            </div>
        </>
    )
}

export default NegativeComplaints
