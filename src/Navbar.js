import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react'

function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
    //  to check events happend or not
    window.addEventListener('scroll',()=>{
        if(window.scrollY>250){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    })
    }, [])

    console.log(show); 

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png' />
        </div>
    )
}

export default Navbar
