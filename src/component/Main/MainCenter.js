import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DATA } from '../utils/data';

const MainCenter = () => {
  
    return (
        <div className="main-center">
            <div className="w-100">
            <div className='data-form'>
                  <button className='btn btn-light'>All</button>
                  <button className='btn btn-light'>Pending</button>
                  <button className='btn btn-light'>Aproved</button>
                  <button className='btn btn-light'>Disapproved</button>
                  <button className='btn btn-light'>Resubmitted</button>
                  <button className='btn btn-light'>Bulk</button>
                </div>

                <Row className="mx-0">
                    <div className="d-flex heading mb-1">
                        <Col xs={1}>order</Col>
                        <Col xs={2}>customer</Col>
                        <Col xs={1}>Price</Col>
                        <Col xs={2}>Delivery Method</Col>
                        <Col xs={1}>Order type</Col>
                        <Col xs={2}>Qty of sheets</Col>
                        <Col xs={2}>Sheet status</Col>
                        <Col xs={1}>Has Low DPI</Col>
                        <Col></Col>
                    </div>
                </Row>

                {DATA.map((order) => (
    <Row key={order.shopify_order_number} className="mx-0">
        <div className="d-flex first mb-1">
            <Col xs={1} className="d-flex align-items-center">
                <Form>
                    <Form.Check type="checkbox" />
                </Form>
                <span>{order.shopify_order_number}</span>
            </Col>
            <Col xs={2} className="d-flex justify-content-center">{order.customer.name}</Col>
            <Col xs={1}>{order.price}</Col>
            <Col xs={2}>{order.delivery_method}</Col>
            <Col xs={2}>{order.order_type}</Col>
            <Col xs={1}>{order.quantity_of_sheets}</Col>
            <Col xs={2}>{order.order_status}</Col>
            <Col xs={1}>{order.has_low_dpi}</Col>
        </div>
    </Row>
))}

            </div>
        </div>
    );
};

export default MainCenter;
