import React from 'react';
import style from "./main.module.css";
import Link from "../components/Link/CLink";
import logo from "../res/img/main-logo.svg";

function Main() {
    return (
        <section className={style.Main}>
            <div className={style.Container}>
                <img src={logo}></img>
                <Link style={style.Link} to="/kategorie">Katalog</Link>
            </div>
        </section>
    )
}

export default Main
