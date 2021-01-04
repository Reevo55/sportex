import React from 'react'
import style from './SummaryList.module.css';
import ButtonLight from '../../../components/Button/ButtonLight'
import Bar from '../../Templates/Bar/Bar'
import List from '../../Templates/Lists/List'
import ListItem from '../../Templates/Lists/ListItem/ListItem'

function SummaryList(props) {
    return (
        <>
            <h1 className={style.Title}>Podsumowanie</h1>

            <div className={style.List}>
                <List>
                    <ListItem notMutable={true} />
                    <ListItem notMutable={true} />
                    <ListItem notMutable={true} />
                    <ListItem notMutable={true} />
                </List>
            </div>

            <div className={style.Summary}>
                <ButtonLight onclick={props.onclickBack}>ANULUJ</ButtonLight>
                <ButtonLight onclick={props.onclickNext}>DALEJ</ButtonLight>

                <p>Cena całkowita: <span className={style.WholePrice}>1999zł</span>  + dostawa</p>
            </div>
        </>
    )
}

export default SummaryList
