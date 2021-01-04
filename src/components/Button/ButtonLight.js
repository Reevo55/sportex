import React from 'react'
import style from './ButtonLight.module.css'
function ButtonLight(props) {
    return (
        <button className={style.ButtonLight} onClick={props.onclick}>{props.children}</button>
    )
}

export default ButtonLight
