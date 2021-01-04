import React from 'react';
import style from './JumboMini.module.css';
import Quote from '../../res/img/sportex-slogan.png';
import {useHistory} from 'react-router-dom'

function JumboMini() {
    const history = useHistory();

    const anchorStart = () => {
        history.push({
            pathname: "/"
        })
    }

    return (
        <div className={style.Jumbo} onClick={anchorStart}>
            <img src={Quote} className={style.Quote}/>
        </div>
    )
}

export default JumboMini
