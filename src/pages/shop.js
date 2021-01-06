import React, { useState, useEffect } from 'react'
import JumboMini from '../components/Jumbotron/JumboMini';
import Filters from '../containers/Filters/Filters';
import style from './shop.module.css';
import Catalog from '../containers/Catalog/Catalog';
import Product from '../containers/Product/Product';
import axios from 'axios';

import boots from '../res/img/boot.png';

function Shop() {
    const [category, setCategory] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);

    const [productViewState, setProductViewState] = useState(false);

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [filteredProducts, setFilteredProducts] = useState([])

    const [pickedItem, setPickedItem] = useState({})

    useEffect(()=> {
        axios.get('api/Products/AllProducts').then(jres => {
            setProducts(jres.data);
            setFilteredProducts(jres.data);
            setLoading(false);
            console.log("Loading " + loading);
            console.log(products);
        })
    }, [])

    useEffect(() => {
        console.log('filtered')
    }, [filteredProducts])

    const itemClickHandler = (key) => {
        setPickedItem(products.find(item => item.id == key))
        setProductViewState(true);
    }

    const backToCatalogClick = () => {
        setProductViewState(false);
    }

    const categoryClickHandler = (id) => {
        console.log(id)
        setCategory(id)

        setFilteredProducts(products.filter(product => product.category == id))
    }

    const resetFiltersHandler = () => {
        setMaxPrice(10000)
        setMinPrice(1)
        setFilteredProducts(products)
    }

    const lowestPriceHandler= () => {
        console.log('lowest price sort')
        let sortedProducts = [...filteredProducts].sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        
        setFilteredProducts(sortedProducts) 
    }

    const highestPriceHandler = () => {
        console.log('highest price sort')
        let sortedProducts = [...filteredProducts].sort((a,b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0))
        
        setFilteredProducts(sortedProducts) 
    }
    const highestOpinion = () => {
        console.log('highest opinion sort')
    }

    const onMaxChangeHandler = (e) => {
        let maxP = e.target.value

        setMaxPrice(maxP)
        setFilteredProducts(products.filter(product => product.price <= maxP && product.price >= minPrice))
    }

    const onMinChangeHandler = (e) => {
        let minP = e.target.value

        setMinPrice(minP)
        setFilteredProducts(products.filter(product => product.price >= minP && product.price <= maxPrice))
    }

    const catalogView = () => {
        return (
            <div className={style.Container}>
                <div className={style.LeftContainer}>
                    <Filters catOnClick={categoryClickHandler} 
                        resetClick={resetFiltersHandler}  
                        categories={[1,2,3,4]}
                        onclickHighestPrice={highestPriceHandler}
                        onclickLowestPrice={lowestPriceHandler}
                        onclickHighestOpinion={highestOpinion}
                        onMaxChange={onMaxChangeHandler}
                        onMinChange={onMinChangeHandler}
                        max={maxPrice}
                        min={minPrice}/>
                </div>
                <div className={style.RightContainer}>
                    <Catalog onclick={itemClickHandler} items={filteredProducts} />
                </div>
            </div>
        )
    }

    const productView = () => {
        return (
            <div className={style.ProductView}>

                <Product 
                    title={pickedItem.name} 
                    price={pickedItem.price}
                    opinion={'9/10'}
                    img={boots}
                    desc={pickedItem.description}
                    onclick={backToCatalogClick}
                />
            </div>
        )
    }

    const handleComponent = () => {
        let result;

        if(loading) {
            result = 'Loading...'
        }
        else {
            result = productViewState == false ? catalogView() : productView()
        }

        return result;
    }

    return (
        <>
            <JumboMini />
            {
               handleComponent()
            }
        </>
    )
}

export default Shop
