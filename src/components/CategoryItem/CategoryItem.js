import React from 'react'
import style from './CategoryItem.module.css'
import Boots from '../../res/img/boots.png'
import Img64 from '../Img64/Img64'

function CategoryItem(props) {
    console.log(props)
    return (
        <div key={props.id} className={style.CategoryItem} onClick={() => props.onclick(props.id)}>
            <div className={style.ImgContainer}>
                <Img64 style={style.Img} data={props.img} />
            </div>
            <h3 className={style.Title}>{props.name}</h3>
        </div>
    )
}

export default CategoryItem
