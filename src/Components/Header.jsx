import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
import { UilUser } from '@iconscout/react-unicons';

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <BrowserRouter>

      <a
        href="/"
        className="logo d-flex align-items-center me-auto me-lg-0"
      >
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1>
          Zakie<span>.</span>
        </h1>
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Menu">Menu</a>
          </li>
          <li>
            <a href="/posts">Community</a>
          </li>
          <li>
            <a href="/Calculator">Calculator</a>
          </li>    
          <li>
            <a href="/Pricing">Pricing</a>
          </li>
          <li>
            <a href="/About">About us</a>
          </li>
          <li>
            <a href="/Contact">Contact us</a>
          </li>
          <li className='offset-1'>
            <a href="/log">login</a>
          </li>
          <li>
            <a href="/reg">signup</a>
          </li>
          <li>
            <Link to="/profile">
            <a href="/profile"> <UilUser/></a>
            </Link>
          </li>
         
        </ul>
      </nav>
      {/* .navbar */}
      <a className="btn-book-a-table" href="/Pricing">
        Book a Plan
      </a>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
      </BrowserRouter>
    </div>
    
  </header>
  )
}

export default Header