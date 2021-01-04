import React from 'react'
import style from './summary.module.css'
import SummaryC from '../containers/Summary/Summary'

function Summary() {
    return (
        <section className={style.Summary}>
            <SummaryC/>
        </section>
    )
}

export default Summary
