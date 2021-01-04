import React from 'react'
import BasicFilters from './BasicFilters/BasicFilters'
import style from './Filters.module.css';
import BLight from '../../components/Button/ButtonLight'

function Filters() {
    return (
        <div className={style.FilterContainer}>
            <BasicFilters />

            <div className={style.Buttons}>
                <div className={style.MarginTop}>
                    <BLight>ZASTOSUJ</BLight>
                </div>
                <div className={style.MarginTop}>
                    <BLight>RESETUJ</BLight>
                </div>
            </div>
        </div>
    )
}

export default Filters
