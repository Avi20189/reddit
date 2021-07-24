import React from 'react';
import reddit from '../../assets/images/reddit.jpg';
import './Logo.css';


export default function Logo() {
    return ( 
    <div className="logo hoverable">
        <img src={reddit} alt=""/>
        <span>reddit</span>
    </div>
    );
}