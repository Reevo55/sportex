import React from 'react'
import style from './PriceRange.module.css'

function PriceRange(props) {
    return (
        <div className={style.Filters}>
            <h2 className={style.Title}>Cena</h2>
            <div className={style.InputContainer}>
                <div className={style.InputDiv}>
                    <label>Min </label>
                    <input type='number' onChange={props.onMinChange} defaultValue={props.min} min={1}></input> zł

                </div>
                <div className={style.InputDiv}>
                    <label>Max </label>
                    <input type='number' onChange={props.onMaxChange} defaultValue={props.max} max={10000}></input> zł
                </div>
            </div>
        </div>
    )
}

export default PriceRange
