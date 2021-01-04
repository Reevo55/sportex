import React from 'react'
import CatItem from './CatalogItem/CatalogItem'
import style from './Catalog.module.css'

function Catalog(props) {

    const handleItems = (size) => {
        let arrayOfCatItems = [];
        for(let i = 0; i < size; i++) {
            arrayOfCatItems.push(<CatItem onclick={props.itemClick}/>);
        }

        return arrayOfCatItems.map(elem => { return elem } );
    }

    return (
        <div className={style.CatalogContainer}>
            {
                handleItems(20)
            }
        </div>
    )
}

export default Catalog
