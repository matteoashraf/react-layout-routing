import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY>0)
        }
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`navbar navbar-custom navbar-expand-lg sticky-top bg-blue ${scrolled? 'py-2' : 'py-4'}`}>
                <div className="container">
                    <Link className="navbar-brand text-white fw-bold fs-2" to="/">START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fw-bold rounded-3 mx-2" aria-current="page" to="about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fw-bold rounded-3 mx-2" to="portfolio">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fw-bold rounded-3 mx-2" to="contact">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
