import React, { useEffect, useState } from 'react'
import style from './Summary.module.css'
import SummaryList from './SummaryList/SummaryList'
import SummaryInfo from './SummaryInfo/SummaryInfo'
import { useHistory } from 'react-router-dom';
import SummaryDelievery from './SummaryDelievery/SummaryDelievery';
import SummaryPayment from './summaryPayment/SummaryPayment';
import SummarySum from './SummarySum/SummarySum';
import BasicModal from '../Templates/Modals/BasicModal';
import ButtonLight from '../../components/Button/ButtonLight';
import CLink from '../../components/Link/CLink';
import Loading from '../../components/Loading/Loading';
import axios from 'axios'

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

    const [delieveryType, setDelieveryType] = useState('CollectionInPerson');
    const [paymentType, setPaymentType] = useState('Transfer');

    const [showModalResponse, setShowModalResponse] = useState(false)
    const [showModalError, setShowModalError] = useState(false)
    const [orderState, setOrderState] = useState('potwierdzone')

    const [products, setProducts] = useState(false)
    const [loading, setLoading] = useState(false)

    const [delieveryTypes, setDelieveryTypes] = useState([])
    const [paymentTypes, setPaymentTypes] = useState([])

    useEffect(() => {
        axios.get('https://localhost:44338/api/Cart/AllCart').then(res => {
            console.log(res.data.lines)
            setProducts(res.data.lines);
            setLoading(false)
        })
        axios.get('https://localhost:44338/api/Payment/Types').then(res => {
            console.log('payment')
            console.log(res.data)
            setPaymentTypes(res.data);

        })
        axios.get('https://localhost:44338/api/Delivery/Types').then(res => {
            console.log('delievery')
            console.log(res.data)
            setDelieveryTypes(res.data);
        })
    }, [])

    const summaryNextButton = (e) => {
        e.preventDefault()
        let i = index;
        if (i < components.length - 1) {
            i++;
        }
        setIndex(i)
    }
    const summaryBackButton = (e) => {
        e.preventDefault()
        let i = index;
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
        if (products) {
            products.forEach(item => {
                sum += item.quantity * item.product.price;
            });
        }

        return sum.toFixed(2);
    }

    const finalizeOrderBtnClick = () => {
        const paymentId = paymentTypes.find(elem => elem.Name == paymentType).Id;
        const delieveryId = delieveryTypes.find(elem => elem.Name == delieveryType).Id;
        console.log(JSON.stringify(products))

        const data = JSON.stringify({
            'addres': {
                "name": delievery.firstname,
                "surname": delievery.surname,
                "city": delievery.city,
                "country": "Polska",
                "telephone": delievery.tel
            },
            'lines': products.map(elem => {
                return {
                    'product': elem.product,
                    'quantity': elem.quantity
                }
            }),
            'delivery': {
                'deliveryType': delieveryId,
                'status': 0
            },
            'payment': {
                'paymentType': paymentId,
                'totalSum': parseFloat(calculatePrice())
            },
            "status": "Do realizacji"
        })

        console.log(data)
        console.log(paymentId)
        console.log(delieveryId)
        axios.post('https://localhost:44338/api/Add/Order', data, { headers: { "Content-Type": "application/json" } }
        ).then(res => {
            console.log('Wysłano, otrzymano odp: ')
            console.log(res)

            axios.delete('api/Cart/Clear');
        })

        setShowModalResponse(true)
    }

    const sumInfoNextClick = (e) => {
        for (const prop in delievery) {
            if (delievery[prop] === '') {
                setShowModalError(true);
                return false;
            }
        }
        summaryNextButton(e)
        return true;
    }

    const summaryComponent = () => {
        if (loading) return <Loading />

        if (components[index] === 'summaryList') {
            return <SummaryList onclickNext={summaryNextButton} onclickBack={firstBack} cart={products} totalPrice={calculatePrice()} />
        }
        else if (components[index] === 'summaryInfo') {
            return <SummaryInfo
                onclickNext={sumInfoNextClick}
                onclickBack={summaryBackButton}
                delieveryDetails={delievery}
                onchange={handleInputChange}
            />
        }
        else if (components[index] === 'summaryDelivery') {
            return <SummaryDelievery
                delieveryTypes={delieveryTypes}
                onclickNext={summaryNextButton}
                onclickBack={summaryBackButton}
                delieveryHandler={delieveryHandler} />
        }
        else if (components[index] === 'summaryPayment') {
            return <SummaryPayment
                paymentTypes={paymentTypes}
                onclickNext={summaryNextButton}
                onclickBack={summaryBackButton}
                paymentHandler={paymentHandler} />
        }
        else if (components[index] === 'summarySum') {
            return <SummarySum
                onclickNext={finalizeOrderBtnClick}
                onclickBack={summaryBackButton}
                delieveryInfo={delievery}
                delieveryType={delieveryType}
                payment={paymentType}
                totalPrice={calculatePrice()} />
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

    const currentModal = () => {
        if (orderState == 'niepotwierdzone') {
            return (
                <BasicModal title='Zamówienie niepotwierdzone!' text='Coś poszło nie tak, spróbuj ponownie później'>
                    <CLink to='/koszyk'>MENU GŁÓWNE</CLink>
                </BasicModal>
            )
        }
        else if (orderState == 'potwierdzone') {
            return (
                <BasicModal title='Dziękujemy!' text='Zamówienie zostało potwierdzone, pozostaje czekać na zamówienie!'>
                    <CLink to='/'>MENU GŁÓWNE</CLink>
                </BasicModal>)
        }
    }

    return (
        <>
            <div className={style.MainContainer}>
                {summaryComponent()}
            </div>

            {showModalResponse && currentModal()}
            {
                showModalError && (
                    <BasicModal title='Informacje niepełne!' text='Uzupełnij wszystkie informacje!'>
                        <ButtonLight onclick={() => setShowModalError(false)}>OK</ButtonLight>
                    </BasicModal>
                )}
        </>
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
