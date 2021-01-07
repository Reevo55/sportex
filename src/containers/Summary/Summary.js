import React, { useState } from 'react'
import style from './Summary.module.css'
import SummaryList from './SummaryList/SummaryList'
import SummaryInfo from './SummaryInfo/SummaryInfo'
import { useHistory } from 'react-router-dom';
import SummaryDelievery from './SummaryDelievery/SummaryDelievery';
import SummaryPayment from './summaryPayment/SummaryPayment';
import SummarySum from './SummarySum/SummarySum';

function Summary() {
    const components = ['summaryList', 'summaryInfo', 'summaryDelivery', 'summaryPayment', 'summarySum'];
    const [index, setIndex] = useState(0)
    const history = useHistory()

    const [delievery, setDelievery] = useState({
        firstname: '',
        surname: '',
        adress: '',
        postal: '',
        city: '',
        tel: ''
    })

    const [delieveryType, setDelieveryType] = useState('DPD');
    const [paymentType, setPaymentType] = useState('BLIK');
    
    const summaryNextButton = (e) => {
        e.preventDefault()
        let i = index;
        console.log(i)
        if (i < components.length - 1) {
            i++;
        }
        setIndex(i)
    }
    const summaryBackButton = (e) => {
        e.preventDefault()
        let i = index;
        console.log(i)
        if (i > 0) {
            i--;
        }
        setIndex(i)
    }

    const delieveryHandler = (e) => {
        console.log(e.target.value)

        setDelieveryType(e.target.value)
    }

    const paymentHandler = (e) => {
        console.log(e.target.value)

        setPaymentType(e.target.value)
    }

    const firstBack = () => {
        history.goBack();
    }

    const calculatePrice = () => {
        let sum = 0;
        apiCart.lines.forEach(item => {
            sum += item.quantity * item.product.price;
        });

        return sum;
    }


    const summaryComponent = () => {
        if ( components[index] === 'summaryList') {
            return <SummaryList onclickNext={summaryNextButton} onclickBack={firstBack} cart={apiCart.lines} totalPrice={calculatePrice()} />
        }
        else if ( components[index] === 'summaryInfo') {
            return <SummaryInfo
                onclickNext={summaryNextButton}
                onclickBack={summaryBackButton}
                delieveryDetails={delievery}
                onchange={handleInputChange}
            />
        }
        else if ( components[index] === 'summaryDelivery') {
            return <SummaryDelievery
                onclickNext={summaryNextButton}
                onclickBack={summaryBackButton} 
                delieveryHandler = {delieveryHandler}/>
        }
        else if ( components[index] === 'summaryPayment') {
            return <SummaryPayment
                onclickNext={summaryNextButton}
                onclickBack={summaryBackButton} 
                paymentHandler = {paymentHandler}/>
        }
        else if ( components[index] === 'summarySum') {
            return <SummarySum 
            onclickNext={summaryNextButton}
            onclickBack={summaryBackButton} 
            delieveryInfo={delievery}
            delieveryType={delieveryType}
            payment={paymentType}
            totalPrice={calculatePrice()}/>
        }
        else return <h1>Something went wrong!</h1>
    }

    const handleInputChange = (e) => {
        const deliev = { ...delievery }
        const value = e.target.value
        const name = e.target.name
        deliev[name] = value
        setDelievery(deliev)

        console.log(name + " " + value)
        console.log(delievery)
    }

    return (
        <div className={style.MainContainer}>
            {summaryComponent()}
        </div>
    )
}

const apiCart = {
    "lines": [
        {
            "cartLineId": 0,
            "product": {
                "id": 1,
                "category": 2,
                "name": "Okulary do pływania",
                "price": 7.89,
                "amount": "34",
                "description": "Na basen",
                "code": "55555s",
                "grade": 3.5,
                "date": "2021-01-06T00:00:00",
                "image": "aHR0cHM6Ly9vcHR5a3duZWNpZS5wbC81NTA4LWxhcmdlX2RlZmF1bHQvb2t1bGFyeS1kby1wbHl3YW5pYS1rb3Jla2N5am5lLWRsYS1kemllY2ktdmlldy5qcGc="
            },
            "quantity": 2
        },
        {
            "cartLineId": 0,
            "product": {
                "id": 2,
                "category": 1,
                "name": "Rękawice bramkarskie",
                "price": 20.89,
                "amount": "12",
                "description": "Do obrony",
                "code": "44444f",
                "grade": 3,
                "date": "2021-01-06T00:00:00",
                "image": "aHR0cHM6Ly9zcG9rZXkucGwvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDMvODM4MDQ1LTEwMjR4MTAyNC5qcGc="
            },
            "quantity": 2
        },
        {
            "cartLineId": 0,
            "product": {
                "id": 3,
                "category": 3,
                "name": "Buty do biegania",
                "price": 150.45,
                "amount": "12",
                "description": "Do biegania",
                "code": "33333r",
                "grade": 4.5,
                "date": "2021-01-06T00:00:00",
                "image": "aHR0cHM6Ly93b2xpbml1c3oucGwvcG9sX3BsX0J1dHktZG8tYmllZ2FuaWEtdy10ZXJlbmllLUFkaWRhcy1URVJSRVgtVFJBSUxNQUtFUi1CQjMzNTgtODg2XzIuanBn"
            },
            "quantity": 1
        }
    ]
}

export default Summary
