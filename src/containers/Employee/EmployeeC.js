import React, { useEffect, useState } from 'react'
import style from './EmployeeC.module.css'
import EmployeeBar from '../Templates/Bar/EmployeeBar'
import { BrowserRouter, Route } from 'react-router-dom'
import WaitingComplaints from './WaitingComplaints/WaitingComplaints'
import PositiveComplaints from './PositiveComplaints/PositiveComplaints'
import NegativeComplaints from './NegativeComplaints/NegativeComplaints'
import OrderHistoryEmp from './OrderHistoryEmp/OrderHistoryEmp'
import axios from 'axios'

function EmployeeC() {
    const [currentComponent, setCurrentComponent] = useState('none')

    const [complaints, setComplaints] = useState([])
    const [statuses, setStatuses] = useState([])

    const WAITING_STATUS = 0;
    const ACCEPTED_STATUS = 1;
    const REJECTED_STATUS = 2;


    useEffect(() => {
        fetchRes()
        axios.get('https://localhost:44338/api/ConsumerComplaint/Statuses').then(res => {
            console.log(res.data)
            setStatuses(res.data)
        })
    }, [])

    const handleCurrentComponent = () => {
        if (currentComponent == 'none') {
            return ''
        }
        else if (currentComponent == 'waitingComplaints') {
            return <WaitingComplaints fetch={fetchRes} complaints={complaints.filter(item => item.status == WAITING_STATUS)}/>
        }
        else if (currentComponent == 'positiveComplaints') {
            return <PositiveComplaints complaints={complaints.filter(item => item.status == ACCEPTED_STATUS)}/>
        }
        else if (currentComponent == 'negativeComplaints') {
            return <NegativeComplaints complaints={complaints.filter(item => item.status == REJECTED_STATUS)}/>
        }
        else if (currentComponent == 'orderHistory') {
            return <OrderHistoryEmp />
        }
    }

    const changeComponent = (component) => {
        setCurrentComponent(component)
    }

    const fetchRes = () => {
        axios.get('https://localhost:44338/api/ConsumerComplaint/Employee/1').then(res => {
            console.log('Z FETCH RESA')
            console.log(res.data)
            setComplaints(res.data)
        })
    }

    return (
        <div className={style.MainContainer}>
            <EmployeeBar changeComponent={changeComponent}/>

                < div className={style.RightContainer}>
                {handleCurrentComponent()}
            </div>
        </div>
    )
}

export default EmployeeC