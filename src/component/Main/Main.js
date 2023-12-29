import React from 'react'
import Right from './Right';
import Left from './Left';
import Sidebar from './Sidebar'

export default function Main() {
    return (
        <div>
            <div className="d-flex flex-row ">
                <Sidebar />
                <Left />
                <div className="main-center"></div>
                <Right />
            </div>
        </div>

    )
}


