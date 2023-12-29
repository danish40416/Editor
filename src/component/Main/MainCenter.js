import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { TbFingerprintScan } from "react-icons/tb";
import { Row, Col, Form, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function MainCenter() {
    return (
        <div className="main-center ">
            <div className='w-100 '>
                <div className='data-form'>
                  <button className='btn btn-light'>All</button>
                  <button className='btn btn-light'>Pending</button>
                  <button className='btn btn-light'>Aproved</button>
                  <button className='btn btn-light'>Disapproved</button>
                  <button className='btn btn-light'>Resubmitted</button>
                  <button className='btn btn-light'>Bulk</button>
                </div>

                <Row className='mx-0'>
                    <div className='d-flex heading mb-1 '>
                        <Col xs={1} className='d-flex'>
                            <Form>
                                {['checkbox',].map((type) => (
                                    <Form.Check type={type} id={`default-${type}`} />))}
                            </Form> <span>order</span>
                        </Col>

                        <Col xs={2}className='d-flex justify-content-center'>Customer</Col >
                        <Col xs={1}>Price </Col >
                        <Col xs={2}>Delivery Method </Col >
                        <Col xs={2}> Order Type </Col >
                        <Col xs={1} >Quantity</Col>
                        <Col xs={2}> Order status</Col>
                        <Col xs={1}>Has Low DPI</Col>

                    </div>
                </Row>

                <Row className='mx-0'>
                    <div className='d-flex first mb-1 '>
                        <Col xs={1} className='d-flex'>
                            <Form>
                                {['checkbox',].map((type) => (
                                    <Form.Check type={type} id={`default-${type}`} />))}
                            </Form> <span>#1605</span>
                        </Col>

                        <Col xs={2}className='d-flex justify-content-center'>znb khan</Col >
                        <Col xs={1}>106.72 </Col >
                        <Col xs={2}>standard </Col >
                        <Col xs={2}> Regular </Col >
                        <Col xs={1} > 1</Col>
                        <Col xs={2} >pending</Col>
                        <Col xs={1}>0</Col>
                    </div>
                </Row>

                <Row className='mx-0'>
                    <div className='d-flex first mb-1'>
                        <Col xs={1} className='d-flex '>
                            <Form>
                                {['checkbox',].map((type) => (
                                    <Form.Check type={type} id={`default-${type}`} />))}
                            </Form> <span>#1604</span>
                        </Col>

                        <Col xs={2}className='d-flex justify-content-center'>znb khan</Col >
                        <Col xs={1}>26.68 </Col >
                        <Col xs={2}>standard </Col >
                        <Col xs={2}> Regular </Col >
                        <Col xs={1} > 1</Col>
                        <Col xs={2} >pending</Col>
                        <Col xs={1}>0</Col>
                    </div>
                </Row>

                <Row className='mx-0'>
                    <div className='d-flex first mb-1'>
                        <Col xs={1} className='d-flex '>
                            <Form>
                                {['checkbox',].map((type) => (
                                    <Form.Check type={type} id={`default-${type}`} />))}
                            </Form> <span>#1603</span>
                        </Col>

                        <Col xs={2}className='d-flex justify-content-center'>znb khan</Col >
                        <Col xs={1}>26.68 </Col >
                        <Col xs={2}>standard </Col >
                        <Col xs={2}> Regular </Col >
                        <Col xs={1} > 1</Col>
                        <Col xs={2} >pending</Col>
                        <Col xs={1}>0</Col>
                    </div>
                </Row>

                <Row className='mx-0'>
                    <div className='d-flex first mb-1'>
                        <Col xs={1} className='d-flex '>
                            <Form>
                                {['checkbox',].map((type) => (
                                    <Form.Check type={type} id={`default-${type}`} />))}
                            </Form> <span>#1602</span>
                        </Col>

                        <Col xs={2}className='d-flex justify-content-center'>znb khan</Col >
                        <Col xs={1}>126.68 </Col >
                        <Col xs={2}>standard </Col >
                        <Col xs={2}> Regular </Col >
                        <Col xs={1} >1</Col>
                        <Col xs={2} >Dispatched</Col>
                        <Col xs={1}>0</Col>
                    </div>
                </Row>
                <Row className='mx-0'>
                    <div className='d-flex first mb-1'>
                        <Col xs={1} className='d-flex '>
                            <Form>
                                {['checkbox',].map((type) => (
                                    <Form.Check type={type} id={`default-${type}`} />))}
                            </Form> <span>#1601</span>
                        </Col>

                        <Col xs={2}className='d-flex justify-content-center'>znb khan</Col >
                        <Col xs={1}>106.72 </Col >
                        <Col xs={2}>standard </Col >
                        <Col xs={2}> Regular </Col >
                        <Col xs={1}> 1</Col>
                        <Col xs={2} >Cancelled</Col>
                        <Col xs={1}>0</Col>
                    </div>
                </Row>
                <Row className='mx-0'>
                    <div className='d-flex first mb-1'>
                        <Col xs={1} className='d-flex '>
                            <Form>
                                {['checkbox',].map((type) => (
                                    <Form.Check type={type} id={`default-${type}`} />))}
                            </Form> <span>#1600</span>
                        </Col>

                        <Col xs={2}className='d-flex justify-content-center'>znb khan</Col >
                        <Col xs={1}>26.68 </Col >
                        <Col xs={2}>standard </Col >
                        <Col xs={2}> Regular </Col >
                        <Col xs={1} >1</Col>
                        <Col xs={2} >pending</Col>
                        <Col xs={1}>0</Col>
                    </div>
                </Row>
                <Row className='mx-0'>
                    <div className='d-flex first mb-1'>
                        <Col xs={1} className='d-flex '>
                            <Form>
                                {['checkbox',].map((type) => (
                                    <Form.Check type={type} id={`default-${type}`} />))}
                            </Form> <span>#1599</span>
                        </Col>

                        <Col xs={2}className='d-flex justify-content-center'>znb khan</Col >
                        <Col xs={1}>26.68 </Col >
                        <Col xs={2}>standard </Col >
                        <Col xs={2}> Regular </Col >
                        <Col xs={1} >1</Col>
                        <Col xs={2} >pending</Col>
                        <Col xs={1}>0</Col>
                    </div>
                </Row>
                <Row className='mx-0'>
                    <div className='d-flex first mb-1'>
                        <Col xs={1} className='d-flex '>
                            <Form>
                                {['checkbox',].map((type) => (
                                    <Form.Check type={type} id={`default-${type}`} />))}
                            </Form> <span>#1598</span>
                        </Col>

                        <Col xs={2}className='d-flex justify-content-center'>znb khan</Col >
                        <Col xs={1}>40.6 </Col >
                        <Col xs={2}>standard </Col >
                        <Col xs={2}> Regular </Col >
                        <Col xs={1} >2</Col>
                        <Col xs={2} >pending</Col>
                        <Col xs={1}>1</Col>
                    </div>
                </Row>
                <Row className='mx-0'>
                    <div className='d-flex first mb-1'>
                        <Col xs={1} className='d-flex '>
                            <Form>
                                {['checkbox',].map((type) => (
                                    <Form.Check type={type} id={`default-${type}`} />))}
                            </Form> <span>#1597</span>
                        </Col>

                        <Col xs={2}className='d-flex justify-content-center'>aa</Col >
                        <Col xs={1}>0 </Col >
                        <Col xs={2}>standard </Col >
                        <Col xs={2}> Regular </Col >
                        <Col xs={1} > 1</Col>
                        <Col xs={2} >Dispatched</Col>
                        <Col xs={1}>0</Col>
                    </div>
                </Row>
                <Row className='mx-0 '>
                    <div className='d-flex first mb-1'>
                        <Col xs={1} className='d-flex '>
                            <Form>
                                {['checkbox',].map((type) => (
                                    <Form.Check type={type} id={`default-${type}`} />))}
                            </Form> <span>#1605</span>
                        </Col>

                        <Col xs={2}className='d-flex justify-content-center'>aa</Col >
                        <Col xs={1}>638 </Col >
                        <Col xs={2}>standard </Col >
                        <Col xs={2}> Regular </Col >
                        <Col xs={1} >1</Col>
                        <Col xs={2} >pending</Col>
                        <Col xs={1}>0</Col>
                    </div>
                </Row>

            </div>

        </div>
    )
}
