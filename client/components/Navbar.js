import React from 'react';
import {Link,NavLink} from 'react-router-dom';

export default function Navbar(props){
    return(
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark' id='Navbar'>
            <div className="container">
                <Link to='/' className='navbar-brand'><strong>Streamy<span className='text-success'>Node</span></strong></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id='navbarSupportedContent'>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/add'>Add Song</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}