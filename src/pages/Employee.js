import React from 'react';
// import Modal from '../component/Modal';
import { useSelector } from 'react-redux';

import "../style/body.css"

function Employee(props) {
    const { onClickEdit ,onClickClose} = props
    const employees = useSelector(state => state.employee.employees)

    return (
        <div className='employeesCoantainer'>
            {
                employees.map((employee => {
                    return (
                        <div key={employee.email} className='employeeItem'>
                            <div className='empDetail'>{employee.name}</div>
                            <div className='empDetail'>{employee.email}</div>
                            <div className='empDetail'>{employee.gender}</div>
                            <div className='empDetail'>{employee.role}</div>
                            <div>
                                <button onClick={() => onClickEdit(employee.email)}> update </button>
                            </div>
                        </div>    
                    )
                }))
            }

           
        </div>
    );
}

export default Employee;