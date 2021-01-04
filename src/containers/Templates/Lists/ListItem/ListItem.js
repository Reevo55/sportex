import React from 'react'
import ButtonSmall from '../../../../components/Button/ButtonSmall'
import Boots from '../../../../res/img/boot.png'
import style from './ListItem.module.css'
function ListItem(props) {
    let mutable = true;

    if (props.notMutable) {
        mutable = false;
    }

    return (
        <div className={style.Item}>
            <img className={style.Img} src={Boots}></img>
            <div className={style.RightCont}>
                <div className={style.FirstRow}>
                    <h2 className={style.Title}>NIKE 420 ELO DWA ZERO</h2>
                    <h2 className={style.Price}> 499.99 zł </h2>
                </div>
                <h4 className={style.Desc}>Najnowsza wersja klasycznych butów od firmy NIKE</h4>

                {
                    mutable &&
                    <div className={style.Inputs}>
                        <input className={style.InputQuantity} type='number' min='1' max='99' value='1'></input>
                        <ButtonSmall>USUŃ</ButtonSmall>
                    </div>
                }
            </div>
        </div>
    )
}

export default ListItem
