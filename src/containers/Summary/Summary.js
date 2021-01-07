import React, { useState } from 'react'
import style from './Summary.module.css'
import SummaryList from './SummaryList/SummaryList'
import SummaryInfo from './SummaryInfo/SummaryInfo'
import { useHistory } from 'react-router-dom';

function Summary() {
    const components = ['summaryList', 'summaryInfo', 'summaryDelivery', 'summaryPayment', 'summarySum'];
    let index = 0;
    const [currentSummary, setCurrentSummary] = useState(components[index])
    const history = useHistory()


    const summaryNextButton = () => {
        if(index < components.length - 1) index++;
        setCurrentSummary(components[index])
    }
    const summaryBackButton = () => {
        index--;
        if(index < 0) index = 0;
        setCurrentSummary(components[index])
    }

    const firstBack = () => {
        history.goBack();
    }
    
    const summaryComponent = () => {
        if(currentSummary === 'summaryList') {
            return <SummaryList onclickNext={summaryNextButton} onclickBack={firstBack} cart={apiCart.lines}/>
        }
        else if (currentSummary === 'summaryInfo') {
            return <SummaryInfo onclickNext={summaryNextButton} onclickBack={summaryBackButton}/>
        }
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
