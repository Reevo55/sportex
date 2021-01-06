import React from 'react'
import ButtonLight from '../../components/Button/ButtonLight'
import style from './Product.module.css'
import { FaBackspace } from "react-icons/fa";

function Product(props) {
    return (
        <>

            <div className={style.MainContainer}>
                <h1 className={style.GoBack} onClick={props.onclick}><FaBackspace /></h1>
                <div className={style.LeftContainer}>
                    <h1 className={style.Title}>{props.title}</h1>
                    <img src={props.img} className={style.Img}></img>
                </div>


                <div className={style.RightContainer}>
                    <h3 className={style.Opinion}>Opinie: {props.opinion}</h3>
                    <h2 className={style.Price}>{props.price} zł</h2>

                    <div>
                        <ButtonLight>DO KOSZYKA</ButtonLight>
                    </div>
                </div>

            </div>

            <div className={style.DescContainer}>
                <h2 className={style.DescTitle}>Opis produktu</h2>

                <p className={style.Desc}>{props.desc}</p>
            </div>
        </>
    )
}

export default Product
