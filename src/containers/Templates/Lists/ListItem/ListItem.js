import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import ButtonSmall from '../../../../components/Button/ButtonSmall'
import Img64 from '../../../../components/Img64/Img64';
import Boots from '../../../../res/img/boot.png'
import style from './ListItem.module.css'
function ListItem(props) {
    const [quantity, setQuantity] = useState(props.quantity)


    const addItem = () => {
        setQuantity(quantity + 1)
        axios.post(`api/Cart/AddProduct/${props.id}`).then(
            res => {
                props.setProducts(res.data.lines)
            }
        )
    }

    const deleteItem = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)

            axios.delete(`api/Cart/DecreaseQuantity/${props.id}`).then(
                res => {
                    props.setProducts(res.data.lines)
                }
            )
        }
    }

    return (
        <div key={props.id} className={style.Item}>
            <Img64 style={style.Img} data={props.img}></Img64>
            <div className={style.RightCont}>
                <div className={style.FirstRow}>
                    <h2 className={style.Title}>{props.title}</h2>
                    <h2 className={style.Price}>{props.price} zł</h2>
                </div>
                <h4 className={style.Desc}>{props.desc}</h4>

                {
                    props.mutable ?
                        <div className={style.Inputs}>
                            <button onClick={addItem}>+</button>
                            <input className={style.InputQuantity} type='number' min='1' max='99' value={quantity} readOnly={true}></input>
                            <button onClick={deleteItem}>-</button>
                            <label className={style.Label}>{props.maxQuantity} max</label>

                            <ButtonSmall onclick={() => props.removeWholeItem(props.id)}>USUŃ</ButtonSmall>
                        </div> :
                        <div className={style.Inputs}>
                            <p>Ilość: {props.quantity}</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default ListItem
