import React from 'react'
import style from './CategoriesPicker.module.css'
import CatSelection from './CategorySelection/CategorySelection'

function CategoriesPicker() {
    return (
        <div className={style.Categories}>
            <h1 className={style.HeaderCat}> KATEGORIE </h1>
            <CatSelection></CatSelection>
        </div>
    )
}

export default CategoriesPicker
