import React from 'react'
import style from './ListInput.module.css'
function ListInput(props) {
    return (
        <input className={style.Input} type={props.type} placeholder={props.place}/>
    )
}

export default ListInput
