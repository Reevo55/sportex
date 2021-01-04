import React from 'react'
import style from './CatalogItem.module.css'
import boot from '../../../res/img/boot.png'
import Button from '../../../components/Button/ButtonSmall'

function CatalogItem(props) {
    return (
        <div className={style.Item} onClick={props.onclick}>
            <h2 className={style.Title}>NIKE 420 ELO DWA ZERO</h2>
            <img className={style.Img} src={boot} />
            <div className={style.FirstRow}>
                <h4 className={style.Desc}>Najnowsza wersja klasycznych butów od firmy NIKE</h4>
                <h4 className={style.Price}> 499.99 zł</h4>
            </div>

            <div className={style.SecondRow}>
                <h4 className={style.Rating}> OCENA: 9/10 </h4>
                <div className={style.ButtonCont}>
                    <Button>DO KOSZYKA</Button>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem
