import React from 'react';
import NavLeft from './NavLeft';
import NavCenter from './NavCenter';
import NavRight from './NavRight';

export default function Navbar() {
    return (
        <div className="d-flex flex-row navbar m-0 p-0 ">
            <NavLeft />
            <NavCenter />
            <NavRight />
        </div>

    );
};

