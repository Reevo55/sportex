import React from 'react'
import style from './Bar.module.css'
import ButtonWhite from '../../../components/Button/ButtonWhite'
import CLink from '../../../components/Link/CLink'
import LeftBar from './LeftBar'

function Bar() {
    return (
        <div className={style.LeftBar}>
            <LeftBar>
                <h2 className={style.Option}>Konto</h2>
                <ButtonWhite>Ustawienia</ButtonWhite>
                <ButtonWhite>Zamówienia</ButtonWhite>
                <ButtonWhite>Koszyk</ButtonWhite>

                <h2 className={style.Option}>Personalizacja</h2>
                <ButtonWhite>Dane</ButtonWhite>
                <ButtonWhite>Kontakt</ButtonWhite>

                <CLink>KATALOG</CLink>
            </LeftBar>
        </div>
    )
}

export default Bar
