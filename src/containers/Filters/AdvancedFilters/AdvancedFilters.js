import React from 'react'
import style from './AdvancedFilters.module.css'

function AdvancedFilters(props) {
    return (
        <div className={style.Filters}>
            <h2 className={style.Title}>Filtry</h2>
            <ul className={style.FiltersList}>
                <li className={style.ListItem}>
                    <button className={style.Button} onClick={props.highestPriceClick}>&nbsp;</button>
                    <span className={style.FilterItem}>od najwyższej ceny</span>
                </li>
                <li className={style.ListItem}>
                    <button className={style.Button} onClick={props.lowestPriceClick}>&nbsp;</button>
                    <span className={style.FilterItem}>od najniższej ceny</span>
                </li>
                <li className={style.ListItem}>
                    <button className={style.Button} onClick={props.highestOpinionClick}>&nbsp;</button>
                    <span className={style.FilterItem}>od najwyższej oceny</span>
                </li>
            </ul>
        </div>
    )
}

export default AdvancedFilters
