import React from 'react'
import style from './Bar.module.css'
import ButtonWhite from '../../../components/Button/ButtonWhite'
import CLink from '../../../components/Link/CLink'
import LeftBar from './LeftBar'
import { useHistory } from 'react-router-dom'
import WhiteLink from '../../../components/Link/WhiteLink'

function Bar() {
    // const history = useHistory()

    return (
        <div className={style.LeftBar}>
            <LeftBar>
                <h2 className={style.Option}>Konto</h2>
                <ButtonWhite>Ustawienia</ButtonWhite>
                <WhiteLink to='/historia' > Zamówienia </WhiteLink>
                <WhiteLink to='/koszyk' > Koszyk </WhiteLink>

                <h2 className={style.Option}>Personalizacja</h2>
                <ButtonWhite>Dane</ButtonWhite>
                <ButtonWhite>Kontakt</ButtonWhite>

                <CLink to={'/katalog'}>KATALOG</CLink>
            </LeftBar>
        </div>
    )
}

export default Bar
