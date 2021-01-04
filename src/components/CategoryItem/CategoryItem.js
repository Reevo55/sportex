import React from 'react'
import style from './CategoryItem.module.css'
import Boots from '../../res/img/boots.png'

function CategoryItem(props) {
    return (
        <div className={style.CategoryItem} onClick={props.onclick}>
            <div className={style.ImgContainer}>
                <img className={style.Img} src={Boots} />
            </div>
            <h3 className={style.Title}>{props.name}</h3>
        </div>
    )
}

export default CategoryItem
