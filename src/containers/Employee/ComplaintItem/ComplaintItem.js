import React from 'react'
import ButtonLight from '../../../components/Button/ButtonLight'
import style from './ComplaintItem.module.css'

function ComplaintItem(props) {
    return (
        <div className={style.Item} key={props.id}>
            <div className={style.LeftContainer}>
                <h2>Nr: {props.id}</h2>
                <p>Data: {props.date}</p>
                <p>Status: {props.status}</p>
            </div>
            <div className={style.RightContainer}>
                <h2>Kwota: {props.price} zł</h2>

                <div>
                    <ButtonLight onclick={() => props.openItem(props.id)}>SZCZEGÓŁY</ButtonLight>
                </div>
            </div>

            {props.selectable && <button onClick={() => props.onclick(props.id)} className={[style.select, props.selected ? style.selected : style.notSelected].join(' ')}>&nbsp;</button>}
        </div>
    )
}

export default ComplaintItem
