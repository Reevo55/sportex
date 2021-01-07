import React from 'react'
import ButtonLight from '../../../components/Button/ButtonLight'
import List from '../../Templates/Lists/List'
import ListItem from '../../Templates/Lists/ListItem/ListItem'
import ListInput from '../../Templates/Lists/ListInput/ListInput';
import style from './SummarySum.module.css'

function SummarySum(props) {
    const printObject = (obj) => {
        let result = [];

        for (const prop in obj) {
            result.push(<p>{obj[prop]}</p>)
        }

        return result.join(' ')
    }

    return (
        <div>
            <h1 className={style.Title}>Podsumowanie</h1>

            <div className={style.Info}>
                <h2>Adres</h2>
                <p>{props.delieveryInfo.firstname} {props.delieveryInfo.surname}</p>
                <p>{props.delieveryInfo.adress}</p>
                <p>{props.delieveryInfo.postal} {props.delieveryInfo.city}</p>
                <p>{props.delieveryInfo.tel}</p>

                <h2>Sposób dostawy</h2>
                <p>- {props.delieveryType}</p>

                <h2>Sposób płatności</h2>
                <p>- {props.payment}</p>

                <h2>Całkowita cena: {props.totalPrice} zł</h2>
            </div>

            
            <div className={style.Summary}>
                <ButtonLight onclick={props.onclickBack}>ANULUJ</ButtonLight>
                <ButtonLight onclick={props.onclickNext}>DALEJ</ButtonLight>
            </div>
        </div>
    )
}

export default SummarySum
