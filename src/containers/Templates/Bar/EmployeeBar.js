import React from 'react'
import style from './EmployeeBar.module.css'
import ButtonWhite from '../../../components/Button/ButtonWhite'
import CLink from '../../../components/Link/CLink'
import LeftBar from './LeftBar'
import WhiteLink from '../../../components/Link/WhiteLink'

function Bar(props) {
    // const history = useHistory()

    return (
        <div className={style.LeftBar}>
            <LeftBar>
                <h2 className={style.Option}>Reklamacje</h2>
                <ButtonWhite onclick={() => props.changeComponent('waitingComplaints')}> Oczekujące </ButtonWhite>
                <ButtonWhite onclick={() => props.changeComponent('positiveComplaints')}> Pozytywne </ButtonWhite>
                <ButtonWhite onclick={() => props.changeComponent('negativeComplaints')}> Negatywne </ButtonWhite>

                <h2 className={style.Option}>Zamówienia</h2>
                <ButtonWhite onclick={() => props.changeComponent('orderHistory')}> Historia zamówień </ButtonWhite>
                
                <CLink to={'/'}>GŁÓWNA STRONA</CLink>
            </LeftBar>
        </div>
    )
}

export default Bar
