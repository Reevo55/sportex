import React, { useState, useEffect } from 'react'
import JumboMini from '../components/Jumbotron/JumboMini';
import Filters from '../containers/Filters/Filters';
import style from './shop.module.css';
import Catalog from '../containers/Catalog/Catalog';
import Product from '../containers/Product/Product';
import axios from 'axios';

import boots from '../res/img/boot.png';
import ToCart from '../components/ToCart/ToCart';
import CLink from '../components/Link/CLink';
import Loading from '../components/Loading/Loading';

function Shop(props) {
    const [loading, setLoading] = useState(true)
    
    const [category, setCategory] = useState(0);

    const [productViewState, setProductViewState] = useState(false);
    const [categories, setCategories] = useState([]);

    const [products, setProducts] = useState([])

    const [filteredProducts, setFilteredProducts] = useState([])

    const [pickedItem, setPickedItem] = useState({})

    const [filters, setFilters] = useState({
        categories: false,
        filters: false,
        prices: {
            min: false,
            max: false
        },
        minPrice: 0,
        maxPrice: 10000,
        category: 0
    })

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

    useEffect(() => {
        console.log('Filtering...')
        console.log(filters)
        let toFilter = [...products];
        if(filters.categories != false && filters.category != 0 ) toFilter = filters.categories(toFilter, filters.category)
        if(filters.filters != false) toFilter = filters.filters(toFilter)
        if(filters.prices.max != false) toFilter = filters.prices.max(toFilter, filters.maxPrice, filters.minPrice)
        if(filters.prices.min != false) toFilter = filters.prices.min(toFilter, filters.maxPrice, filters.minPrice)

        setFilteredProducts([...toFilter])
    }, [filters])

    useEffect(() => {
        console.log('Teraz sie ustawiają nowe pofiltrowane produkty')
        console.log(filteredProducts)
    }, [filteredProducts])

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

        axios.post('https://localhost:44338/api/Cart/AddProduct/' + productId);

        alert("Product added!")
    }

    const categoryFilterHandler = (id) => {
        setCategory(id)
        console.log("category: " + category)
        const myFilters = { ...filters }
        myFilters.categories = filterByCategory
        myFilters.category = id
        setFilters(myFilters)
    }

    const resetFiltersHandler = () => {
        setFilteredProducts([...products])
        setFilters({
            categories: false,
            filters: false,
            prices: {
                min: false,
                max: false
            },
            minPrice: 0,
            maxPrice: 10000,
            category: 0
        })
    }

    const lowestPriceHandler = () => {
        const myFilters = { ...filters }
        myFilters.filters = sortByLowestPrice
        setFilters(myFilters)
    }

    const highestPriceHandler = () => {
        const myFilters = { ...filters }
        myFilters.filters = sortByHighestPrice
        setFilters(myFilters)
    }
    const highestGradeHandler = () => {
        const myFilters = { ...filters }
        myFilters.filters = sortByHighestGrade
        setFilters(myFilters)
    }

    const onMaxChangeHandler = (e) => {
        let maxP = e.target.value

        const myFilters = { ...filters }
        myFilters.prices.max = filterByPriceMax
        myFilters.maxPrice = maxP
        
        setFilters(myFilters)
    }

    const onMinChangeHandler = (e) => {
        let minP = e.target.value

        const myFilters = { ...filters }
        myFilters.prices.min = filterByPriceMin
        myFilters.minPrice = minP

        setFilters(myFilters)
    }

    const filterByPriceMax = ( arr, maxPrice, minPrice ) => {
        console.log(maxPrice)
        console.log(minPrice)
        return arr.filter(item => item.price <= maxPrice && item.price >= minPrice)
    }
    const filterByPriceMin = ( arr, maxPrice, minPrice ) => {
        console.log(maxPrice)
        console.log(minPrice)
        return arr.filter(product => product.price >= minPrice && product.price <= maxPrice)
    }
    const sortByHighestPrice = ( arr ) => {
        return arr.sort((a, b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0))
    }
    const sortByLowestPrice = ( arr ) => {
        return arr.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    }
    const sortByHighestGrade = ( arr ) => {
        return arr.sort((a, b) => (a.grade > b.grade) ? -1 : ((b.grade > a.grade) ? 1 : 0))
    }
    const filterByCategory = ( arr, catId ) => {
        console.log('In filtering')
        console.log(catId)
        return arr.filter(item => item.category == catId )
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
                        onclickHighestGrade={highestGradeHandler}
                        onMaxChange={onMaxChangeHandler}
                        onMinChange={onMinChangeHandler}
                        max={filters.maxPrice}
                        min={filters.minPrice} />
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
                    grade={pickedItem.grade}
                />
            </div>
        )
    }

    const handleComponent = () => {
        let result;

        if (loading) {
            result = <Loading />
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

            <ToCart />
        </>
    )
}

export default Shop
