import React from 'react'
import CatItem from './CatalogItem/CatalogItem'
import style from './Catalog.module.css'

function Catalog(props) {

    const handleItems = () => {
        return props.items.map(item => {
            return <CatItem key={item.id} item={item} onclick={props.onclick} toCartClick={props.toCartClick}/>
        })
    }

    return (
        <div className={style.CatalogContainer}>
            {
                handleItems()
            }
        </div>
    )
}

export default Catalog
