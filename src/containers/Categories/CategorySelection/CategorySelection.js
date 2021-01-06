import React, {useState, useEffect} from 'react'
import style from './CategorySelection.module.css'
import CatItem from '../../../components/CategoryItem/CategoryItem';
import { useHistory } from 'react-router-dom';

function CategorySelection() {
    const history = useHistory();

    const categoryClickHandler = () => {

        history.push({
            pathname: "/katalog"
        })
        //SET REDUX Kategoria aktualna
    }

    const categoriesHandler = () => {
        console.log(categories)
        return categories.map((elem, index) => {
            return (
                <CatItem key={index} name={elem.name} img={elem.img} onclick={categoryClickHandler} />
            );
        })
    }



    return (
        <div className={style.SliderContainer}>
            <div className={style.Slider}>
                {categoriesHandler()}
            </div>
        </div>
    )
}

export default CategorySelection

const categories = [
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    },
    {
        name: "Obuwie",
        img: "jakisUrl"
    }
]
