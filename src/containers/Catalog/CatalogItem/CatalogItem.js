import React from 'react'
import style from './CatalogItem.module.css'
import boot from '../../../res/img/boot.png'
import Button from '../../../components/Button/ButtonSmall'

function CatalogItem(props) {
    return (
        <div className={style.Item} onClick={() => props.onclick(props.item.id)}>
            <h2 className={style.Title}>{props.item.name}</h2>
            <img className={style.Img} src={boot} />
            <div className={style.FirstRow}>
                <h4 className={style.Desc}>{props.item.description}</h4>
                <h4 className={style.Price}>{props.item.price} zł</h4>
            </div>

            <div className={style.SecondRow}>
                <h4 className={style.Rating}></h4>
                {/* <h4 className={style.Rating}> OCENA: 9/10 </h4> */}
                <div className={style.ButtonCont}>
                    <Button>DO KOSZYKA</Button>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem
