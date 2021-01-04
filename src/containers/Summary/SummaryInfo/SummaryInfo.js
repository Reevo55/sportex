import React from 'react'
import style from './SummaryInfo.module.css';
import ButtonLight from '../../../components/Button/ButtonLight'
import List from '../../Templates/Lists/List'
import ListItem from '../../Templates/Lists/ListItem/ListItem'
import ListInput from '../../Templates/Lists/ListInput/ListInput';

function SummaryInfo(props) {
    return (
        <>
            <h1 className={style.Title}>Wprowadź dane do dostawy</h1>

            <div className={style.List}>
                <List>
                    <ListInput type={'text'} place={'Imie'}/>
                    <ListInput type={'text'}place={'Nazwisko'}/>
                    <ListInput type={'text'} place={'Adres'}/>
                    <ListInput type={'text'} place={'Kod Pocztowy'}/>
                    <ListInput type={'text'} place={'Miejscowość'}/>
                    <ListInput type={'tel'} place={'Telefon'}/>
                </List>
            </div>

            <div className={style.Summary}>
                <ButtonLight onclick={props.onclickBack}>ANULUJ</ButtonLight>
                <ButtonLight onclick={props.onclickNext}>DALEJ</ButtonLight>

            </div>
        </>
    )
}

export default SummaryInfo
