import React from 'react'
import EmployeeC from '../containers/Employee/EmployeeC'
import style from './employee.module.css'
function Employee() {
    return (
        <section className={style.Employee}>
            <EmployeeC />
        </section>
    )
}

export default Employee
