import React from 'react'
import style from './ButtonWhite.module.css'
function ButtonWhite(props) {
    return (
        <button className={style.Button} onClick={props.onclick}>{props.children}</button>
    )
}

export default ButtonWhite
