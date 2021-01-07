import React from 'react'
import style from './ListInput.module.css'
function ListInput(props) {
    return (
        <input name={props.name} className={style.Input} type={props.type} placeholder={props.place} onChange={props.onchange} required/>
    )
}

export default ListInput
