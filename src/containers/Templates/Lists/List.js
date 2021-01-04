import React from 'react'
import style from './List.module.css'

function List(props) {
    return (
        <div className={style.List}>
            {props.children}
        </div>
    )
}

export default List
