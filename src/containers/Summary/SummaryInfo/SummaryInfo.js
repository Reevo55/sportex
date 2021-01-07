import React from 'react'
import style from './SummaryInfo.module.css';
import ButtonLight from '../../../components/Button/ButtonLight'
import List from '../../Templates/Lists/List'
import ListItem from '../../Templates/Lists/ListItem/ListItem'
import ListInput from '../../Templates/Lists/ListInput/ListInput';

function SummaryInfo(props) {    
    const onSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <form onSubmit={onSubmit}>
            <h1 className={style.Title}>Wprowadź dane do dostawy</h1>

            <div className={style.List}>
                <List>
                    <ListInput type={'text'} place={'Imie'} onchange={props.onchange} name={'firstname'}/>
                    <ListInput type={'text'} place={'Nazwisko'} onchange={props.onchange} name={'surname'}/>
                    <ListInput type={'text'} place={'Adres'} onchange={props.onchange} name={'adress'}/>
                    <ListInput type={'text'} place={'Kod Pocztowy'} onchange={props.onchange} name={'postal'}/>
                    <ListInput type={'text'} place={'Miejscowość'} onchange={props.onchange} name={'city'}/>
                    <ListInput type={'tel'} place={'Telefon'} onchange={props.onchange} name={'tel'}/>
                </List>
            </div>

            <div className={style.Summary}>
                <ButtonLight onclick={props.onclickBack}>ANULUJ</ButtonLight>
                <ButtonLight onclick={props.onclickNext}>DALEJ</ButtonLight>
            </div>
        </form>
    )
}

export default SummaryInfo
