import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Contactus from './contact/Contactus';
import About from './about/About';
import { UilUser } from '@iconscout/react-unicons';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <header id="header" className="header fixed-top d-flex align-items-center">
              <div className="container d-flex align-items-center justify-content-between">
                <a
                  href="index.html"
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
                    <Link to="/Aboutus">
                      <a href="#about">About us</a>
                      </Link>
                    </li>
                    <li>
                    <Link to="/Contactus">
                      <a href="#contact">Contact us</a>
                      </Link>
                    </li>
                    <li>
                      <Link to='/Register'>
                      <a href="#hero">Signup</a>
                      </Link>
                    </li>
                    <li>
                      <Link to='/login'>
                      <a href="#hero">Login</a>
                      </Link>
                    </li>
                    <li>
                      <a href="#hero">
                      <UilUser/>
                      </a>
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Home' element={<Home />} />
          {/* <Route path='/Register' element={<Register />} /> */}
          {/* <Route path='/Login' element={<Login />} /> */}
          {/* <Route path='/:userid' element={<Home />} /> */}
          <Route path='/Aboutus' element={<About />} />
          <Route path='/Contactus' element={<Contactus />} />
          {/* <Route path='/MyAccount' element={<UserPro />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
