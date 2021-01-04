import React from 'react'
import style from './BasicFilters.module.css'

function BasicFilters() {
    return (
        <div className={style.Categories}>
            <h2 className={style.Title}>Kategorie</h2>
            <ul className={style.CategoriesList}>
                <li className={style.ListItem}>
                    <button className={style.Button}>&nbsp;</button>
                    <span className={style.CatItem}>Obuwie</span>
                </li>
                <li className={style.ListItem}>
                    <button className={style.Button}>&nbsp;</button>
                    <span className={style.CatItem}>Obuwie</span>
                </li>
                <li className={style.ListItem}>
                    <button className={style.Button}>&nbsp;</button>
                    <span className={style.CatItem}>Obuwie</span>
                </li>
                <li className={style.ListItem}>
                    <button className={style.Button}>&nbsp;</button>
                    <span className={style.CatItem}>Obuwie</span>
                </li>
                <li className={style.ListItem}>
                    <button className={style.Button}>&nbsp;</button>
                    <span className={style.CatItem}>Obuwie</span>
                </li>
            </ul>
        </div>
    )
}

export default BasicFilters