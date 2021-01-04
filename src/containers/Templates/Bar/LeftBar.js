import React from 'react'
import style from './LeftBar.module.css'

function LeftBar(props) {
    return (
        <div className={style.Bar}>
            {props.children}
        </div>
    )
}

export default LeftBar