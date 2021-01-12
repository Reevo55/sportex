import React from 'react'
import style from './SummaryPayment.module.css'
import ButtonLight from '../../../components/Button/ButtonLight'
import List from '../../Templates/Lists/List'
import ListItem from '../../Templates/Lists/ListItem/ListItem'
import ListInput from '../../Templates/Lists/ListInput/ListInput';

function SummaryPayment(props) {
    const handlePaymentTypes = () => {
        console.log(props.paymentTypes)
        return props.paymentTypes.map(element => {
            return (
                <div className={style.InputContainer}>
                    <input key={element.Id} className={style.Input} type='radio' id='payment' name='payment' value={element.Name} onClick={props.paymentHandler} defaultChecked></input>
                    <label className={style.Label} htmlFor='payment'>{element.Name}</label>
                </div>
            )
        });
    }

    return (
        <form>
            <h1 className={style.Title}>Wprowadź rodzaj dostawy</h1>

            <div className={style.List}>
                <List>
                    <fieldset >
                        {handlePaymentTypes()}
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
