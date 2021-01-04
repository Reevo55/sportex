import React, { useState } from 'react'
import JumboMini from '../components/Jumbotron/JumboMini';
import Filters from '../containers/Filters/Filters';
import style from './shop.module.css';
import Catalog from '../containers/Catalog/Catalog';
import Product from '../containers/Product/Product';

import boots from '../res/img/boot.png';

function Shop() {
    const [category, setCategory] = useState('Boots');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);

    const [productViewState, setProductViewState] = useState(false);

    const itemClickHandler = () => {
        console.log("hello")
        setProductViewState(true);
    }

    const catalogView = () => {
        return (
            <div className={style.Container}>
                <div className={style.LeftContainer}>
                    <Filters />
                </div>
                <div className={style.RightContainer}>
                    <Catalog itemClick={itemClickHandler}/>
                </div>
            </div>
        )
    }

    const productView = () => {
        return (
            <div className={style.ProductView}>
                <Product 
                    title={"NIKE 420 ELO"} 
                    opinion={"9/10"} 
                    img={boots}
                    price={"499,99"}
                    desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                />
            </div>
        )
    }

    return (
        <>
            <JumboMini />
            {
                productViewState == false ? catalogView() : productView()
            }
        </>
    )
}

export default Shop
