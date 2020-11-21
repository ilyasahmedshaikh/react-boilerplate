import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'
// import logo from '../assets/img/logo_465x320.png'

function Header() {

    const [menuToggle, setMenuToggle] = useState(false);

    return(
        <div>
            <div className="header">

                <div className={"mobile-menu-toggle " + (menuToggle ? 'change' : '')} onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className="desktop-menu container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className='logo'>
                                <a href="#"><i class="fas fa-dice-d20"></i>ReactJS</a>
                            </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    <li><Link to={process.env.PUBLIC_URL + '/home'}>Home</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/services'}>Services</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/about'}>About</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/contact'}>Contact</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/login'}>Login</Link></li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"mobile-menu sidenav " + (menuToggle ? 'open' : 'close')}>

                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className='logo'>
                            <a href="#"><i class="fas fa-dice-d20"></i></a>
                        </div>
                    </div>

                    <li><Link to={process.env.PUBLIC_URL + '/home'} onClick={() => setMenuToggle(!menuToggle)}>Home</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/services'} onClick={() => setMenuToggle(!menuToggle)}>Services</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/about'} onClick={() => setMenuToggle(!menuToggle)}>About</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/contact'} onClick={() => setMenuToggle(!menuToggle)}>Contact</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/login'} onClick={() => setMenuToggle(!menuToggle)}>Login</Link></li>
                </div>
            </div>
        </div>
    );
}

export default Header;