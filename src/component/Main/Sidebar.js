import React from 'react'
import { PiImageSquareBold } from "react-icons/pi";
import { TfiText } from "react-icons/tfi";

export default function sidebar() {
    return (
        <div className='main-sidebar positon-relative'>
            <div className='icon px-3 fs-4 pt-3'> <PiImageSquareBold /></div>
            <p className='icon px-2'>images</p>
            <div className=' icon px-3 fs-4 pt-3'> <TfiText /> </div>
            <p className='icon px-3'>Text</p>
            <div className='positon-absolute '  >
                <button className='sidebar-btn   mx-3  '> ?</button>
            </div>

        </div>
    )
}
