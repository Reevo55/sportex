import React from 'react'
import Link from "../components/Link/CLink";
import style from "./catalog.module.css";
import Jumbo from '../components/Jumbotron/Jumbo';
import CategoriesPicker from "../containers/Categories/CategoriesPicker";

function Catalog() {
    return (
        <section className={style.Catalog}>
            <Jumbo/>
            <CategoriesPicker/>
        </section>
    )
}

export default Catalog
