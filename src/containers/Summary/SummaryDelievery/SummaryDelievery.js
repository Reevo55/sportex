import React from 'react'
import style from './SummaryDelievery.module.css'
import ButtonLight from '../../../components/Button/ButtonLight'
import List from '../../Templates/Lists/List'
import ListItem from '../../Templates/Lists/ListItem/ListItem'
import ListInput from '../../Templates/Lists/ListInput/ListInput';

function SummaryDelievery(props) {
    const handleDelieveryTypes = () => {
        console.log(props.delieveryTypes)
        return props.delieveryTypes.map(element => {
            return (
                <div className={style.InputContainer} key={element.id}>
                    <input key={element.Id} className={style.Input} type='radio' id='delievery' name='delievery' value={element.Name} defaultChecked onClick={props.delieveryHandler}></input>
                    <label className={style.Label} htmlFor='delievery'>{element.Name}</label>
                </div>
            )
        });
    }

    return (
        <form>
            <h1 className={style.Title}>Wprowadź rodzaj dostawy</h1>

            <div className={style.List}>
                <List>
                    <fieldset>
                        {handleDelieveryTypes()}
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
