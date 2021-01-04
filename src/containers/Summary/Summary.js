import React, { useState } from 'react'
import style from './Summary.module.css'
import SummaryList from './SummaryList/SummaryList'
import SummaryInfo from './SummaryInfo/SummaryInfo'

function Summary() {
    const components = ['summaryList', 'summaryInfo', 'summaryDelivery', 'summaryPayment', 'summarySum'];
    let index = 0;
    const [currentSummary, setCurrentSummary] = useState(components[index])

    const summaryNextButton = () => {
        if(index < components.length - 1) index++;
        setCurrentSummary(components[index])
    }
    const summaryBackButton = () => {
        index--;
        if(index < 0) index = 0;
        setCurrentSummary(components[index])
    }
    
    const summaryComponent = () => {
        if(currentSummary === 'summaryList') {
            return <SummaryList onclickNext={summaryNextButton} onclickBack={summaryBackButton}/>
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

export default Summary
