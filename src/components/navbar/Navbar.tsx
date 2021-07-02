import React from 'react';
import Searchbar from '../searchbar/Searchbar';
import Actions from '../actions/Actions';
import Logo from '../logo/Logo';
import './Navbar.css';


export default function Navbar() {
    return <div className = "navbar" >
        <Logo/>
        <Searchbar />
        <Actions/>

    </div>
}