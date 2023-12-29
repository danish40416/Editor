import React from 'react'

export default function NavRight() {
    return (
        <div>
            <div className='nav-right d-flex justify-content-end align-item-center pe-3'>
                <div className=" nav-text  text-end">
                    <p>Minimum Order Quantity (MOQ):</p>
                    <p>Total Number of Sheets:</p>
                    <p>Overall Price:</p>
                </div>
                <div class=" nav-text-num ps-4">
                    <p>1</p>
                    <p>0</p>
                    <p>$0.00</p>
                </div>
                <div class="d-flex align-items-center ">
                    <button type="button" class=" mx-2 nav-btn1 ms-5">Place Order</button>
                    <button type="button" class=" nav-btn2">Sign In</button>
                </div>
            </div>
        </div>
    )
}
