import React from 'react';
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";




const Main: React.FC = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Main;
