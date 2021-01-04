import React from 'react'
import ButtonLight from '../../components/Button/ButtonSmall'
import Bar from '../Templates/Bar/Bar'
import List from '../Templates/Lists/List'
import ListItem from '../Templates/Lists/ListItem/ListItem'
import style from './Basket.module.css'

function Basket() {
    return (
        <div className={style.MainContainer}>
            <Bar />

            <div className={style.RightContainer}>
                <h1 className={style.Title}>Koszyk</h1>

                <div className={style.List}>
                    <List>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </List>
                </div>

                <div className={style.Summary}>
                    <ButtonLight>Złóż zamówienie</ButtonLight>

                    <p>Cena całkowita: <span className={style.WholePrice}>1999zł</span>  + dostawa</p>
                </div>
            </div>
        </div>
    )
}

export default Basket
