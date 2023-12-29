import React from 'react'
import { RiArrowGoForwardFill, RiArrowGoBackFill } from "react-icons/ri";

export default function NavLeft() {
  return (
    <div>
      <div className='nav-left d-flex align-item-center pt-2'>
        <div className='v-line ps-3 py-2'> Print<span class="  fw-bolder text-danger">PLACE</span></div>
        <div className='fs-5 px-3 py-1 arrow'><RiArrowGoBackFill /></div>
        <div className='fs-5 arrow py-1'> <RiArrowGoForwardFill /></div>
      </div>
    </div>
  )
}
