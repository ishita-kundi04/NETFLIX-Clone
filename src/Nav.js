import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {

    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY > 70){
                handleShow(true);
            }
            else handleShow(false);
        });
        // return () => {
        //     window.removeEventListener("scroll");
        // }
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className='nav__logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427"
                alt="Netflix Logo"
            />

            <img 
                className='nav__avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Avatar"
            />
        </div>
    );
}

export default Nav;