import React, {useState, useEffect} from 'react'
import style from './CategorySelection.module.css'
import CatItem from '../../../components/CategoryItem/CategoryItem';
import { useHistory } from 'react-router-dom';

function CategorySelection(props) {
    const history = useHistory();

    const categoryClickHandler = (catId) => {
        history.push({
            pathname: "/katalog",
            search: `?cat=${catId}`
        })
    }

    const categoriesHandler = () => {
        return props.categories.map((elem) => {
            return (
                <CatItem key={props.id} id={elem.categoryId} name={elem.name} img={elem.image} onclick={categoryClickHandler} />
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
