import React from 'react'
import { PiImageSquareBold } from "react-icons/pi";
import { TfiText } from "react-icons/tfi";

export default function Left() {
    return (
        <div className='main-sidebar'>
            <div className='icon px-3 fs-4 pt-3'> <PiImageSquareBold /></div>
            <p className='icon px-2'>images</p>
            <div className=' icon px-3 fs-4 pt-3'> <TfiText /> </div>
            <p className='icon px-3'>Text</p>

        </div>
    )
}
