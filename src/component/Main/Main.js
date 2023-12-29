import React from 'react'
import Right from './Right';
import Left from './Left';
import Sidebar from './Sidebar'
import MainCenter from './MainCenter';

export default function Main() {
    return (
        <div>
            <div className="d-flex flex-row ">
                <Sidebar />
                <Left />
                <MainCenter/>
                <Right />
            </div>
        </div>

    )
}


