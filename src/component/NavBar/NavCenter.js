import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { HiMiniPencilSquare } from "react-icons/hi2";

export default function NavCenter() {
    return (
        <div>
            <div className='nav-center py-2'>
                <InputGroup className="w-100 px-3">
                    <Form.Control placeholder="Project Name" />
                    <InputGroup.Text className='icon'>< HiMiniPencilSquare /></InputGroup.Text>
                </InputGroup>
            </div>
        </div>
    )
}
