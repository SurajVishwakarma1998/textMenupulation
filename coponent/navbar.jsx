import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid ">
            <div>
                    <a className="navbar-brand text-light" href="/">👀textutils</a>
            </div>
                
                <div  id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">About</Link>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

export default Navbar