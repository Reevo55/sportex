import React, { useState, useEffect } from 'react'
import style from './SummaryList.module.css';
import ButtonLight from '../../../components/Button/ButtonLight'
import Bar from '../../Templates/Bar/Bar'
import List from '../../Templates/Lists/List'
import ListItem from '../../Templates/Lists/ListItem/ListItem'

function SummaryList(props) {
    const handleListItems = () => {
        if (props.cart) {
            return props.cart.map(prod => {
                return <ListItem key={prod.product.id} id={prod.product.id} title={prod.product.name} price={prod.product.price}
                    desc={prod.product.description} img={prod.product.image} quantity={prod.quantity} mutable={false} />
            })
        }
    }

    return (
        <>
            <h1 className={style.Title}>Podsumowanie</h1>

            <div className={style.List}>
                <List>
                    {handleListItems()}
                </List>
            </div>

            <div className={style.Summary}>
                <ButtonLight onclick={props.onclickBack}>ANULUJ</ButtonLight>
                <ButtonLight onclick={props.onclickNext}>DALEJ</ButtonLight>

                <p>Cena całkowita: <span className={style.WholePrice}>{props.totalPrice}zł</span>  + dostawa</p>
            </div>
        </>
    )
}

export default SummaryList
