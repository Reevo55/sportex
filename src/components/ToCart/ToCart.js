import React from 'react'
import style from './ToCart.module.css'
import CartImg from '../../res/img/Cart.png'
import { useHistory } from 'react-router-dom'
function ToCart() {
    const history = useHistory();

    const toCart = () => {
        history.push({
            pathname: "/koszyk"
        })
    }

    return (
        <img className={style.Cart} src={CartImg} alt={'To cart img'} onClick={toCart}></img>
    )
}

export default ToCart
