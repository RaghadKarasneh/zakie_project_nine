import React from 'react'

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <Link to='/Home'>
      <a
        href="#"
        className="logo d-flex align-items-center me-auto me-lg-0"
      >
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1>
          Zakie<span>.</span>
        </h1>
      </a></Link>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
          <Link to='/Home'>
            <a href="#hero">Home</a>
            </Link>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#chefs">Chefs</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Drop Down</span>{" "}
              <i className="bi bi-chevron-down dropdown-indicator" />
            </a>
            <ul>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator" />
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li>
          <li>
             <Link to="/About">
            <a href="#about">About us</a>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
            <a href="#contact">Contact us</a>
            </Link>
          </li>
        </ul>
      </nav>
      {/* .navbar */}
      <a className="btn-book-a-table" href="#book-a-table">
        Book a Table
      </a>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    </div>
  </header>
  )
}

export default Header