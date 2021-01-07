import React from 'react'
import ButtonSmall from '../../../../components/Button/ButtonSmall'
import Img64 from '../../../../components/Img64/Img64';
import Boots from '../../../../res/img/boot.png'
import style from './ListItem.module.css'
function ListItem(props) {

    return (
        <div key={props.id} className={style.Item}>
            <Img64 style={style.Img} data={props.img}></Img64>
            <div className={style.RightCont}>
                <div className={style.FirstRow}>
                    <h2 className={style.Title}>{props.title}</h2>
                    <h2 className={style.Price}>{props.price}</h2>
                </div>
                <h4 className={style.Desc}>{props.desc}</h4>

                {
                    props.mutable &&
                    <div className={style.Inputs}>
                        <input className={style.InputQuantity} type='number' min='1' max='99' value={props.quantity}></input>
                        <ButtonSmall>USUŃ</ButtonSmall>
                    </div>
                }
            </div>
        </div>
    )
}

export default ListItem
