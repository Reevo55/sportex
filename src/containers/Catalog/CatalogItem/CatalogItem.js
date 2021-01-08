import React from 'react'
import style from './CatalogItem.module.css'
import boot from '../../../res/img/boot.png'
import Button from '../../../components/Button/ButtonSmall'
import Img64 from '../../../components/Img64/Img64'

function CatalogItem(props) {
    return (
        <div className={style.Item} onClick={() => props.onclick(props.item.id)}>
            <h2 className={style.Title}>{props.item.name}</h2>
            <div className={style.ImgContainer}>
                <Img64 style={style.Img} data={`${props.item.image}`} />
            </div>
            <div className={style.FirstRow}>
                <h4 className={style.Desc}>{props.item.description}</h4>
                <h4 className={style.Price}>{props.item.price} zł</h4>
            </div>

            <div className={style.SecondRow}>
                <h4 className={style.Rating}> OCENA: {props.item.grade} / 6 </h4>
                <div className={style.ButtonCont}>
                    <Button onclick={(e, productId) => props.toCartClick(e, props.item.id)}>DO KOSZYKA</Button>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem
