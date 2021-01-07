import React, { useEffect, useState } from 'react'
import style from './CategoriesPicker.module.css'
import CatSelection from './CategorySelection/CategorySelection'
import axios from 'axios'

function CategoriesPicker() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        axios.get('api/AllCategory').then(res => {
            setCategories(res.data)
            setLoading(false)
        })
    }, [])

    return (
        <div className={style.Categories}>
            <h1 className={style.HeaderCat}> KATEGORIE </h1>
            {!loading && <CatSelection categories = {categories}></CatSelection> }
        </div>
    )
}

export default CategoriesPicker
