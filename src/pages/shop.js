import React, { useState, useEffect } from 'react'
import JumboMini from '../components/Jumbotron/JumboMini';
import Filters from '../containers/Filters/Filters';
import style from './shop.module.css';
import Catalog from '../containers/Catalog/Catalog';
import Product from '../containers/Product/Product';
import axios from 'axios';

import boots from '../res/img/boot.png';
import ToCart from '../components/ToCart/ToCart';

function Shop(props) {
    const [category, setCategory] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);

    const [productViewState, setProductViewState] = useState(false);
    const [categories, setCategories] = useState([]);

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [filteredProducts, setFilteredProducts] = useState([])

    const [pickedItem, setPickedItem] = useState({})

    useEffect(() => {
        axios.get('api/Products/AllProducts').then(jres => {
            setProducts(jres.data);
            setFilteredProducts(jres.data);
        })
        axios.get('api/AllCategory').then(res => {
            setCategories(res.data)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        if (props.location.search) {
            const query = new URLSearchParams(props.location.search);
            setCategory(query.get('cat'))
            categoryFilterHandler(query.get('cat'))
        }
    }, [products])

    const itemClickHandler = (key) => {
        setPickedItem(products.find(item => item.id == key))
        setProductViewState(true);
    }

    const backToCatalogClick = () => {
        setProductViewState(false);
    }

    const addToCart = (e, productId) => {
        e.cancelBubble = true;
        e.stopPropagation();
        console.log('to cart product: ' + productId)

        // axios.post('https://localhost:44338/api/Cart/AddProduct/1' + productId);

        alert("Product added!")
    }

    const categoryFilterHandler = (id) => {
        setCategory(id)

        setFilteredProducts(products.filter(product => product.category == id))
    }

    const resetFiltersHandler = () => {
        setMaxPrice(10000)
        setMinPrice(1)
        setFilteredProducts(products)
    }

    const lowestPriceHandler = () => {
        console.log('lowest price sort')
        let sortedProducts = [...filteredProducts].sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))

        setFilteredProducts(sortedProducts)
    }

    const highestPriceHandler = () => {
        console.log('highest price sort')
        let sortedProducts = [...filteredProducts].sort((a, b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0))

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
                    <Filters catOnClick={categoryFilterHandler}
                        resetClick={resetFiltersHandler}
                        categories={categories}
                        onclickHighestPrice={highestPriceHandler}
                        onclickLowestPrice={lowestPriceHandler}
                        onclickHighestOpinion={highestOpinion}
                        onMaxChange={onMaxChangeHandler}
                        onMinChange={onMinChangeHandler}
                        max={maxPrice}
                        min={minPrice} />
                </div>
                <div className={style.RightContainer}>
                    <Catalog onclick={itemClickHandler} toCartClick={addToCart} items={filteredProducts} />
                </div>
            </div>
        )
    }

    const productView = () => {
        return (
            <div className={style.ProductView}>

                <Product
                    id={pickedItem.id}
                    title={pickedItem.name}
                    price={pickedItem.price}
                    opinion={'9/10'}
                    img={pickedItem.image}
                    desc={pickedItem.description}
                    onclick={backToCatalogClick}
                    toCart={addToCart}
                />
            </div>
        )
    }

    const handleComponent = () => {
        let result;

        if (loading) {
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

            <ToCart/>
        </>
    )
}

export default Shop
