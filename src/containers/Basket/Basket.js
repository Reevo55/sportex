import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ButtonLight from '../../components/Button/ButtonSmall'
import ButtonWhite from '../../components/Button/ButtonWhite'
import CLink from '../../components/Link/CLink'
import Loading from '../../components/Loading/Loading'
import Bar from '../Templates/Bar/Bar'
import List from '../Templates/Lists/List'
import ListItem from '../Templates/Lists/ListItem/ListItem'
import BasicModal from '../Templates/Modals/BasicModal'
import style from './Basket.module.css'


function Basket() {
    const [products, setProducts] = useState(false)
    const [showAmountModal, setShowAmountModal] = useState(false);
    const [showEmptyModal, setShowEmptyModal] = useState(false);
    const [loading, setLoading] = useState(true)

    const history = useHistory()

    const toSummary = () => {
        if (checkAmount() && !isEmpty()) {
            history.push({
                pathname: '/podsumowanie'
            })
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
    }, [products])

    const handleListItems = () => {
        if (products) {
            return products.map(prod => {
                return <ListItem key={prod.product.id} id={prod.product.id} title={prod.product.name} price={prod.product.price}
                    desc={prod.product.description} img={prod.product.image} quantity={prod.quantity} mutable={true} removeWholeItem={removeWholeItem}
                    checkAmount={checkAmount} maxQuantity={prod.product.amount} fetchProducts={fetchProducts} setProducts={setProducts}/>
            })
        }
    }

    const isEmpty = () => {
        if(products.length == 0) {
            setShowEmptyModal(true)
            return true;
        }
        else return false;
    }

    const fetchProducts = () => {
        axios.get('https://localhost:44338/api/Cart/AllCart').then(res => {
            setProducts(res.data.lines);
            setLoading(false)
            console.log(res.data.lines)
        })
    }

    const calculatePrice = () => {
        let sum = 0;

        if (products) {
            products.forEach(item => {
                sum += item.quantity * item.product.price;
            });
        }

        return sum;
    }

    const removeWholeItem = (id) => {
        console.log(id)
        let data = '';
        axios.delete(`api/Cart/RemoveProduct/${id}`).then(res => {
            data = res.data.lines
            setProducts(data)
        })
    }

    const checkAmount = () => {
        let success = true;

        if (products) {
            console.log('hello here')
            products.forEach(item => {
                if (parseInt(item.quantity) > parseInt(item.product.amount)) {
                    success = false;
                    console.log('hello false')
                }
            });
        }

        console.log(success)
        setShowAmountModal(!success)

        return success;
    }

    return (
        <div className={style.MainContainer}>
            <Bar />

            <div className={style.RightContainer}>
                <h1 className={style.Title}>Koszyk</h1>

                <div className={style.List}>
                    <List>
                        {
                            loading
                                ?
                                <Loading />
                                :
                                handleListItems()
                        }
                    </List>
                </div>

                <div className={style.Summary}>
                    <ButtonLight onclick={toSummary}>Złóż zamówienie</ButtonLight>

                    <p>Cena całkowita: <span className={style.WholePrice}>{calculatePrice().toFixed(2)}zł</span>  + dostawa</p>
                </div>
            </div>

            {showAmountModal ?
                <BasicModal  title={'Błędna liczba produktów!'} text={'Proszę zmieścić się w ilości maksymalnej'} >
                    <ButtonLight onclick={() => setShowAmountModal(false)}>OK</ButtonLight>
                </BasicModal>
                : null
            }
            {showEmptyModal ?
                <BasicModal  title={'Koszyk pusty!'} text={'Proszę umieścić coś w koszyku...'} >
                    <ButtonLight onclick={() => setShowEmptyModal(false)}>OK</ButtonLight>
                </BasicModal>
                : null
            }
        </div>
    )
}

export default Basket
