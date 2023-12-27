import React from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiArrowGoForwardFill, RiArrowGoBackFill } from "react-icons/ri";
import { HiMiniPencilSquare } from "react-icons/hi2";
const MyComponent = () => {
    return (
        <Container fluid>
            <Row className='navbar'>

                <Col xs={3} className='d-flex '>
                    <div className='v-line ps-3 pt-2'> Print<span class="  fw-bolder text-danger">PLACE</span></div>
                    <div className='fs-4 px-3 pb-3 arrow'><RiArrowGoBackFill /></div>
                    <div className='fs-4 arrow'> <RiArrowGoForwardFill /></div>
                </Col>


                <Col xs={4} className='d-flex'>
                    <InputGroup className="w-50">
                        <Form.Control placeholder="Project Name" />
                        <InputGroup.Text >< HiMiniPencilSquare /></InputGroup.Text>
                    </InputGroup>
                </Col>


                <Col xs={5} className='d-flex justify-content-end' >
                    <div className=" nav-text pe-3">
                        <p>Minimum Order Quantity (MOQ):</p>
                        <p>Total Number of Sheets:</p>
                        <p>Overall Price:</p>
                    </div>
                    <div class="px-2 nav-text">
                        <p>1</p>
                        <p>0</p>
                        <p>$0.00</p>
                    </div>
                    <div class="d-flex align-items-center ">
                        <button type="button" class=" mx-2 nav-btn1 ">Place Order</button>
                        <button type="button" class=" nav-btn2">Sign In</button>
                        </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MyComponent;
