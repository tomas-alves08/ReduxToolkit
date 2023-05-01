import React from 'react';
import '../App.css';

import { useSelector } from 'react-redux';
import { navValue } from './Reducer/navSlice'

const Nav = () => {
    const nav = useSelector(navValue)
    console.log("NAV: ",nav)
    let navStyle;
    nav ? navStyle = "navBar-on" : navStyle = "navBar-off"

    return <h1 className={navStyle}>Nav Bar</h1>
}

export default Nav;