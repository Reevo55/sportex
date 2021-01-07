import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonLight from '../../components/Button/ButtonSmall'
import CLink from '../../components/Link/CLink'
import Bar from '../Templates/Bar/Bar'
import List from '../Templates/Lists/List'
import ListItem from '../Templates/Lists/ListItem/ListItem'
import style from './Basket.module.css'

function Basket() {
    const [products, setProducts] = useState(apiCart.lines)

    useEffect(() => {
        //TODO fetch cart
    }, [])

    const handleListItems = () => {
        return products.map(prod => {
            return <ListItem key={prod.product.id} id={prod.product.id} title={prod.product.name} price={prod.product.price}
                    desc={prod.product.description} img={prod.product.image} quantity={prod.quantity}/>
        })
    }

    const calculatePrice = () => {
        let sum = 0;
        products.forEach(item => {
            sum += item.quantity * item.product.price;
        });

        return sum;
    }

    return (
        <div className={style.MainContainer}>
            <Bar />

            <div className={style.RightContainer}>
                <h1 className={style.Title}>Koszyk</h1>

                <div className={style.List}>
                    <List>
                        {handleListItems()}
                    </List>
                </div>

                <div className={style.Summary}>
                    <CLink to='/podsumowanie'>Złóż zamówienie</CLink>

                    <p>Cena całkowita: <span className={style.WholePrice}>{calculatePrice()}zł</span>  + dostawa</p>
                </div>
            </div>
        </div>
    )
}

const apiCart = {
    "lines": [
        {
            "cartLineId": 0,
            "product": {
                "id": 1,
                "category": 2,
                "name": "Okulary do pływania",
                "price": 7.89,
                "amount": "34",
                "description": "Na basen",
                "code": "55555s",
                "grade": 3.5,
                "date": "2021-01-06T00:00:00",
                "image": "aHR0cHM6Ly9vcHR5a3duZWNpZS5wbC81NTA4LWxhcmdlX2RlZmF1bHQvb2t1bGFyeS1kby1wbHl3YW5pYS1rb3Jla2N5am5lLWRsYS1kemllY2ktdmlldy5qcGc="
            },
            "quantity": 2
        },
        {
            "cartLineId": 0,
            "product": {
                "id": 2,
                "category": 1,
                "name": "Rękawice bramkarskie",
                "price": 20.89,
                "amount": "12",
                "description": "Do obrony",
                "code": "44444f",
                "grade": 3,
                "date": "2021-01-06T00:00:00",
                "image": "aHR0cHM6Ly9zcG9rZXkucGwvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDMvODM4MDQ1LTEwMjR4MTAyNC5qcGc="
            },
            "quantity": 2
        },
        {
            "cartLineId": 0,
            "product": {
                "id": 3,
                "category": 3,
                "name": "Buty do biegania",
                "price": 150.45,
                "amount": "12",
                "description": "Do biegania",
                "code": "33333r",
                "grade": 4.5,
                "date": "2021-01-06T00:00:00",
                "image": "aHR0cHM6Ly93b2xpbml1c3oucGwvcG9sX3BsX0J1dHktZG8tYmllZ2FuaWEtdy10ZXJlbmllLUFkaWRhcy1URVJSRVgtVFJBSUxNQUtFUi1CQjMzNTgtODg2XzIuanBn"
            },
            "quantity": 1
        }
    ]
}

export default Basket
