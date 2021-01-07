import React from 'react'
import style from './SummaryDelievery.module.css'
import ButtonLight from '../../../components/Button/ButtonLight'
import List from '../../Templates/Lists/List'
import ListItem from '../../Templates/Lists/ListItem/ListItem'
import ListInput from '../../Templates/Lists/ListInput/ListInput';

function SummaryDelievery(props) {
    return (
        <form>
            <h1 className={style.Title}>Wprowadź rodzaj dostawy</h1>

            <div className={style.List}>
                <List>
                    <fieldset onChange={props.delieveryHandler}>
                        <div className={style.InputContainer}>
                            <input  className={style.Input} type='radio' id='delievery' name='delievery' value='DPD' defaultChecked></input>
                            <label   className={style.Label} htmlFor='delievery'>DPD - 15 zł</label>
                        </div>
                        <div className={style.InputContainer}>
                            <input className={style.Input} type='radio' id='delievery' name='delievery' value='PocztaPolska'></input>
                            <label className={style.Label} htmlFor='delievery'>Poczta Polska - 8 zł</label>
                        </div>
                        <div className={style.InputContainer}>
                            <input className={style.Input} type='radio' id='delievery' name='delievery' value='Paczkomat'></input>
                            <label className={style.Label} htmlFor='delievery'>Paczkomat - 3 zł</label>
                        </div>
                        <div className={style.InputContainer}>
                            <input className={style.Input} type='radio' id='delievery' name='delievery' value='self'></input>
                            <label className={style.Label} htmlFor='delievery'>Odbiór własny - 0 zł</label>
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

export default SummaryDelievery
