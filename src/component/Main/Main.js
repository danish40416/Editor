import React from 'react'
import { PiImageSquareBold } from "react-icons/pi";
import { TfiText } from "react-icons/tfi";
import { Container, Row, Col,  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default function Main() {
    return (
        <Container fluid>
            <Row className='main'>
                <Col xs={1} className='main-bg'>

                    <div className='d-flex justify-content-center fs-3 pt-3'>  <PiImageSquareBold /> </div>
                    <p className='d-flex justify-content-center'>images</p>
                    <div className='d-flex justify-content-center fs-3 pt-3'> <TfiText /> </div>
                    <p className='d-flex justify-content-center'>Text</p>


                </Col>
                <Col xs={2}  > <button type="button" className=" left-btn mt-2">Upload Images</button></Col>
                <Col xs={7} className='main-bg '>
                   
                </Col>
                <Col xs={2}>

                    <div className='mb-3'>
                        <button className='btn  pe-5'>Edit</button>
                        <button className='btn  ps-5'>Sheet</button>
                    </div>
                    <hr />
                    <button type="button" className="right-btn">Nest</button>
                    <div className='py-3'>
                        <div >
                            <p>Ruler</p>
                            <p>WireFrame</p>
                            <p>Canvas Background</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
