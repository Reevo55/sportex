import React from 'react'
import style from './BasicFilters.module.css'

function BasicFilters(props) {

    const handleCatList = () => {
        return props.categories.map((cat, index) => {
            return (
                <li className={style.ListItem} key={index++}>
                    <button className={style.Button} onClick={() => props.onclick(index)}>&nbsp;</button>
                    <span className={style.CatItem}>{cat.name}</span>
                </li>
            )
        })
    }

    return (
        <div className={style.Categories}>
            <h2 className={style.Title}>Kategorie</h2>
            <ul className={style.CategoriesList}>
                {
                    handleCatList()
                }
            </ul>
        </div>
    )
}

export default BasicFilters