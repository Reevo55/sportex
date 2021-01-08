import React, { useState } from 'react'
import style from './OrderHis.module.css'
import Bar from '../Templates/Bar/Bar'
import List from '../Templates/Lists/List'
import ItemHistory from '../Templates/Lists/ItemHistory/ItemHistory'
import OrderItem from './OrderItem.js/OrderItem'

function OrderHis() {
    const [showItemComponent, setShowIntemComponent] = useState(false)
    const [currOrderId, setCurrOrderId] = useState()

    const orderClicked = (event, id) => {
        console.log('clicked')
        console.log(id)
        setCurrOrderId(id)
        setShowIntemComponent(true)
    }

    const goBack = () => {
        setShowIntemComponent(false)
    }

    const handleContainer = () => {
        if (showItemComponent) {
            return (
                <OrderItem 
                    title='NIKE 420' desc='niezłe butki' price='420' orderId='124214' 
                    orderDate='2450123' adress='Sloneczna 5c/3' nip='124214125' fullname='Radek Karbowiak' tel='777 992 213' 
                    paymentType='BLIK' paymentDate='25-10-2020' img={'aHR0cHM6Ly9vcHR5a3duZWNpZS5wbC81NTA4LWxhcmdlX2RlZmF1bHQvb2t1bGFyeS1kby1wbHl3YW5pYS1rb3Jla2N5am5lLWRsYS1kemllY2ktdmlldy5qcGc'}
                    goBack={goBack}
                />
            )
        }
        else {
            return (
                <div className={style.List}>
                    <List>
                        <ItemHistory key={1} id={1} title={'NIKE 420'} price={'499'}
                            desc={'Niezle butki serio'} img={'aHR0cHM6Ly9vcHR5a3duZWNpZS5wbC81NTA4LWxhcmdlX2RlZmF1bHQvb2t1bGFyeS1kby1wbHl3YW5pYS1rb3Jla2N5am5lLWRsYS1kemllY2ktdmlldy5qcGc'}
                            orderId={'12312412'}
                            orderDate={'24-10-2020'}
                            orderClicked={orderClicked}
                             />
                    </List>
                </div>
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
