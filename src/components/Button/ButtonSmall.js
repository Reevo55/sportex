import React from 'react'
import style from './ButtonSmall.module.css'
function ButtonLight(props) {
    return (
        <button className={style.Button} onClick={props.onclick}>{props.children}</button>
    )
}

export default ButtonLight
