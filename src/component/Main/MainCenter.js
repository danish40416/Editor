import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { TbFingerprintScan } from "react-icons/tb";
export default function MainCenter() {
  return (
    <div className="main-center ">
 <ButtonGroup aria-label="Basic example" className='btn-grop'>
      <Button variant="light"><TbFingerprintScan /></Button>
      <Button variant="light" className='fs-4'>- +</Button>
      <Button variant="light">100%</Button>
    </ButtonGroup>
    </div>
  )
}
