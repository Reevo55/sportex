import React, { Children } from 'react'
import style from './BasicModal.module.css'

function BasicModal(props) {
    return (
        <div className={style.Background}>
            <div className={style.Modal}>
                <h1 className={style.Title}>{props.title}</h1>
                <p className={style.Text}>{props.text}</p>

                <div className={style.Container}>
                    {props.children}
                </div>
            </div>
        </div>

    )
}

export default BasicModal
