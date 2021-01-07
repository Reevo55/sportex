import React from 'react'
import style from './SummaryPayment.module.css'
import ButtonLight from '../../../components/Button/ButtonLight'
import List from '../../Templates/Lists/List'
import ListItem from '../../Templates/Lists/ListItem/ListItem'
import ListInput from '../../Templates/Lists/ListInput/ListInput';

function SummaryPayment(props) {
    return (
        <form>
            <h1 className={style.Title}>Wprowadź rodzaj dostawy</h1>

            <div className={style.List}>
                <List>
                    <fieldset onChange={props.paymentHandler}>
                        <div className={style.InputContainer}>
                            <input  className={style.Input} type='radio' id='payment' name='payment' value='BLIK' defaultChecked></input>
                            <label   className={style.Label} htmlFor='payment'>BLIK</label>
                        </div>
                        <div className={style.InputContainer}>
                            <input className={style.Input} type='radio' id='payment' name='payment' value='przelew'></input>
                            <label className={style.Label} htmlFor='payment'>Przelew</label>
                        </div>
                        <div className={style.InputContainer}>
                            <input className={style.Input} type='radio' id='payment' name='payment' value='pobranie'></input>
                            <label className={style.Label} htmlFor='payment'>Za pobraniem</label>
                        </div>
                    </fieldset>
                </List>
            </div>

            <div className={style.Summary}>
                <ButtonLight onclick={props.onclickBack}>ANULUJ</ButtonLight>
                <ButtonLight onclick={props.onclickNext}>DALEJ</ButtonLight>
            </div>
        </form>
    )
}

export default SummaryPayment
