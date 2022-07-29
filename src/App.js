import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
import About from './Components/About';
import { UilUser } from '@iconscout/react-unicons';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Home' element={<Home />} />
          {/* <Route path='/Register' element={<Register />} /> */}
          {/* <Route path='/Login' element={<Login />} /> */}
          {/* <Route path='/:userid' element={<Home />} /> */}
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          {/* <Route path='/MyAccount' element={<UserPro />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
