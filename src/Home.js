import React, { Component } from 'react';
import './css/main.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UilClipboardAlt } from '@iconscout/react-unicons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Home extends Component {
    state = {  } 
    render() { 
        return (<>
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <title>Home page</title>
            <meta content="" name="description" />
            <meta content="" name="keywords" />
            {/* Favicons */}
            <link href="./img/favicon.png" rel="icon" />
            <link href="./img/apple-touch-icon.png" rel="apple-touch-icon" />
            {/* Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Amatic+SC:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
              rel="stylesheet"
            />
            {/* Vendor CSS Files */}
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            <link
              href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
              rel="stylesheet"
            />
            <link href="./css/aos.css" rel="stylesheet" />
            <link href="./css/glightbox.min.css" rel="stylesheet" />
            <link href="./css/swiper-bundle.min.css" rel="stylesheet" />
            {/* Template Main CSS File */}
            <link href="./css/main.css" rel="stylesheet" />
            <script src='../public/glightbox/js/glightbox.min.js'></script>
            <script src='../public/aos/aos.js'></script>
            <script src='./js/main.js'></script>
            {/* =======================================================
            * Template Name: Yummy - v1.1.0
            * Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
            * Author: BootstrapMade.com
            * License: https://bootstrapmade.com/license/
            ======================================================== */}
            {/* ======= Hero Section ======= */}
            <section id="hero" className="hero d-flex align-items-center section-bg">
              <div className="container">
                <div className="row justify-content-between gy-5">
                  <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                    <h2 data-aos="fade-up">
                      Enjoy Your Healthy
                      <br />
                      Delicious Food
                    </h2>
                    <p data-aos="fade-up" data-aos-delay={100}>
                      Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                      eveniet. Eum quas beatae cumque eum quaerat.
                    </p>
                    <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                      <a href="#book-a-table" className="btn-book-a-table">
                        Book a Table
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                        className="glightbox btn-watch-video d-flex align-items-center" target={'_blank'}
                      >
                        <i className="bi bi-play-circle" />
                        <span>Watch Video</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                    <img
                      src="./img/hero-img.png"
                      className="img-fluid"
                      alt=""
                      data-aos="zoom-out"
                      data-aos-delay={300}
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* End Hero Section */}
            <main id="main">
              {/* ======= Why Us Section ======= */}
              <section id="why-us" className="why-us section-bg">
                <div className="container" data-aos="fade-up">
                  <div className="row gy-4">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                      <div className="why-box">
                        <h3>Why Choose Yummy?</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                          aute irure dolor in reprehenderit Asperiores dolores sed et.
                          Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                          optio ad corporis.
                        </p>
                        <div className="text-center">
                          <a href="#" className="more-btn">
                            Learn More <i className="bx bx-chevron-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Why Box */}
                    <div className="col-lg-8 d-flex align-items-center">
                      <div className="row gy-4">
                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
                          <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                            <UilClipboardAlt />
                            <h4>Corporis voluptates officia eiusmod</h4>
                            <p>
                              Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                              laboris nisi ut aliquip
                            </p>
                          </div>
                        </div>
                        {/* End Icon Box */}
                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                          <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                            <i className="bi bi-gem" />
                            <h4>Ullamco laboris ladore pan</h4>
                            <p>
                              Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt
                            </p>
                          </div>
                        </div>
                        {/* End Icon Box */}
                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                          <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                            <i className="bi bi-inboxes" />
                            <h4>Labore consequatur incidid dolore</h4>
                            <p>
                              Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                              maiores omnis facere
                            </p>
                          </div>
                        </div>
                        {/* End Icon Box */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Why Us Section */}
              {/* ======= Stats Counter Section ======= */}
              <section id="stats-counter" className="stats-counter">
                <div className="container" data-aos="zoom-out">
                  <div className="row gy-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="stats-item text-center w-100 h-100">
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={232}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>Clients</p>
                      </div>
                    </div>
                    {/* End Stats Item */}
                    <div className="col-lg-3 col-md-6">
                      <div className="stats-item text-center w-100 h-100">
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={521}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>Projects</p>
                      </div>
                    </div>
                    {/* End Stats Item */}
                    <div className="col-lg-3 col-md-6">
                      <div className="stats-item text-center w-100 h-100">
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={1453}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>Hours Of Support</p>
                      </div>
                    </div>
                    {/* End Stats Item */}
                    <div className="col-lg-3 col-md-6">
                      <div className="stats-item text-center w-100 h-100">
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={32}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>Workers</p>
                      </div>
                    </div>
                    {/* End Stats Item */}
                  </div>
                </div>
              </section>
              {/* End Stats Counter Section */}
              {/* ======= Menu Section ======= */}
              <section id="menu" className="menu">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <h2>Our Menu</h2>
                    <p>
                      Check Our <span>Yummy Menu</span>
                    </p>
                  </div>
                  <ul
                    className="nav nav-tabs d-flex justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active show"
                        data-bs-toggle="tab"
                        data-bs-target="#menu-starters"
                      >
                        <h4>Starters</h4>
                      </a>
                    </li>
                    {/* End tab nav item */}
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#menu-breakfast"
                      >
                        <h4>Breakfast</h4>
                      </a>
                      {/* End tab nav item */}
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#menu-lunch"
                      >
                        <h4>Lunch</h4>
                      </a>
                    </li>
                    {/* End tab nav item */}
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#menu-dinner"
                      >
                        <h4>Dinner</h4>
                      </a>
                    </li>
                    {/* End tab nav item */}
                  </ul>
                  <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
                    <div className="tab-pane fade active show" id="menu-starters">
                      <div className="tab-header text-center">
                        <p>Menu</p>
                        <h3>Starters</h3>
                      </div>
                      <div className="row gy-5">
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-1.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-1.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Magnam Tiste</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$5.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-2.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-2.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Aut Luia</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$14.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-3.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-3.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Est Eligendi</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$8.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-4.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-4.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Eos Luibusdam</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$12.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-5.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-5.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Eos Luibusdam</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$12.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-6.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-6.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Laboriosam Direva</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$9.95</p>
                        </div>
                        {/* Menu Item */}
                      </div>
                    </div>
                    {/* End Starter Menu Content */}
                    <div className="tab-pane fade" id="menu-breakfast">
                      <div className="tab-header text-center">
                        <p>Menu</p>
                        <h3>Breakfast</h3>
                      </div>
                      <div className="row gy-5">
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-1.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-1.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Magnam Tiste</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$5.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-2.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-2.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Aut Luia</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$14.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-3.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-3.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Est Eligendi</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$8.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-4.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-4.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Eos Luibusdam</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$12.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-5.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-5.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Eos Luibusdam</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$12.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-6.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-6.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Laboriosam Direva</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$9.95</p>
                        </div>
                        {/* Menu Item */}
                      </div>
                    </div>
                    {/* End Breakfast Menu Content */}
                    <div className="tab-pane fade" id="menu-lunch">
                      <div className="tab-header text-center">
                        <p>Menu</p>
                        <h3>Lunch</h3>
                      </div>
                      <div className="row gy-5">
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-1.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-1.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Magnam Tiste</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$5.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-2.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-2.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Aut Luia</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$14.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-3.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-3.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Est Eligendi</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$8.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-4.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-4.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Eos Luibusdam</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$12.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-5.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-5.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Eos Luibusdam</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$12.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-6.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-6.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Laboriosam Direva</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$9.95</p>
                        </div>
                        {/* Menu Item */}
                      </div>
                    </div>
                    {/* End Lunch Menu Content */}
                    <div className="tab-pane fade" id="menu-dinner">
                      <div className="tab-header text-center">
                        <p>Menu</p>
                        <h3>Dinner</h3>
                      </div>
                      <div className="row gy-5">
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-1.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-1.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Magnam Tiste</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$5.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-2.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-2.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Aut Luia</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$14.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-3.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-3.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Est Eligendi</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$8.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-4.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-4.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Eos Luibusdam</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$12.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-5.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-5.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Eos Luibusdam</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$12.95</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-6.png" className="glightbox">
                            <img
                              src="./img/menu/menu-item-6.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Laboriosam Direva</h4>
                          <p className="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p className="price">$9.95</p>
                        </div>
                        {/* Menu Item */}
                      </div>
                    </div>
                    {/* End Dinner Menu Content */}
                  </div>
                </div>
              </section>
              {/* End Menu Section */}
              {/* ======= Testimonials Section ======= */}
              <section id="testimonials" className="testimonials section-bg">
              <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <h2>Testimonials</h2>
                    <p>
                      What Are They <span>Saying About Us</span>
                    </p>
                  </div>
              <Carousel>
      <Carousel.Item>
        
        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-6">
                              <div className="testimonial-content">
                                <p>
                                  <i className="bi bi-quote quote-icon-left" />
                                  Proin iaculis purus consequat sem cure digni ssim donec
                                  porttitora entum suscipit rhoncus. Accusantium quam,
                                  ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                                  risus at semper.
                                  <i className="bi bi-quote quote-icon-right" />
                                </p>
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <div className="stars">
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 text-center">
                              <img
                                src="./img/testimonials/testimonials-1.jpg"
                                className="img-fluid testimonial-img"
                                alt=""
                              />
                            </div>
                          </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className="row gy-4 justify-content-center">
                            <div className="col-lg-6">
                              <div className="testimonial-content">
                                <p>
                                {/* <FontAwesomeIcon icon="fa-solid fa-clipboard-list" /> */}
                                  Export tempor illum tamen malis malis eram quae irure
                                  esse labore quem cillum quid cillum eram malis quorum
                                  velit fore eram velit sunt aliqua noster fugiat irure
                                  amet legam anim culpa.
                                  <i className="bi bi-quote quote-icon-right" />
                                </p>
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                                <div className="stars">
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 text-center">
                              <img
                                src="./img/testimonials/testimonials-2.jpg"
                                className="img-fluid testimonial-img"
                                alt=""
                              />
                            </div>
                          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="row gy-4 justify-content-center">
                            <div className="col-lg-6">
                              <div className="testimonial-content">
                                <p>
                                  <i className="bi bi-quote quote-icon-left" />
                                  Enim nisi quem export duis labore cillum quae magna enim
                                  sint quorum nulla quem veniam duis minim tempor labore
                                  quem eram duis noster aute amet eram fore quis sint
                                  minim.
                                  <i className="bi bi-quote quote-icon-right" />
                                </p>
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                                <div className="stars">
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 text-center">
                              <img
                                src="./img/testimonials/testimonials-3.jpg"
                                className="img-fluid testimonial-img"
                                alt=""
                              />
                            </div>
                          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="row gy-4 justify-content-center">
                            <div className="col-lg-6">
                              <div className="testimonial-content">
                                <p>
                                  <i className="bi bi-quote quote-icon-left" />
                                  
                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                        
                                  <i className="bi bi-quote quote-icon-right" />
                                </p>
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                                <div className="stars">
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                  <i className="bi bi-star-fill" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 text-center">
                              <img
                                src="./img/testimonials/testimonials-4.jpg"
                                className="img-fluid testimonial-img"
                                alt=""
                              />
                            </div>
                          </div>
      </Carousel.Item>

    </Carousel>
                
                 
                   
                   
                   </div>  
                
              </section>
              {/* End Testimonials Section */}
              {/* ======= Events Section ======= */}
              <section id="events" className="events">
                <div className="container-fluid" data-aos="fade-up">
                  <div className="section-header">
                    <h2>Events</h2>
                    <p>
                      Share <span>Your Moments</span> In Our Restaurant
                    </p>
                  </div>
                  <div
                    className="slides-3 swiper"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="swiper-wrapper row">
                      <div
                        className="swiper-slide event-item d-flex flex-column justify-content-end col-lg-4"
                        style={{ backgroundImage: "url(./img/events-1.jpg)" }}
                      >
                        <h3>Custom Parties</h3>
                        <div className="price align-self-start">$99</div>
                        <p className="description">
                          Quo corporis voluptas ea ad. Consectetur inventore sapiente
                          ipsum voluptas eos omnis facere. Enim facilis veritatis id est
                          rem repudiandae nulla expedita quas.
                        </p>
                      </div>
                      {/* End Event item */}
                      <div
                        className="swiper-slide event-item d-flex flex-column justify-content-end col-lg-4"
                        style={{ backgroundImage: "url(./img/events-2.jpg)" }}
                      >
                        <h3>Private Parties</h3>
                        <div className="price align-self-start">$289</div>
                        <p className="description">
                          In delectus sint qui et enim. Et ab repudiandae inventore
                          quaerat doloribus. Facere nemo vero est ut dolores ea assumenda
                          et. Delectus saepe accusamus aspernatur.
                        </p>
                      </div>
                      {/* End Event item */}
                      <div
                        className="swiper-slide event-item d-flex flex-column justify-content-end col-lg-4"
                        style={{ backgroundImage: "url(./img/events-3.jpg)" }}
                      >
                        <h3>Birthday Parties</h3>
                        <div className="price align-self-start">$499</div>
                        <p className="description">
                          Laborum aperiam atque omnis minus omnis est qui assumenda quos.
                          Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut
                          quibusdam maxime. Non enim perspiciatis.
                        </p>
                      </div>
                      {/* End Event item */}
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </section>
              {/* End Events Section */}
              {/* ======= Chefs Section ======= */}
              <section id="chefs" className="chefs section-bg">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <h2>Chefs</h2>
                    <p>
                      Our <span>Proffesional</span> Chefs
                    </p>
                  </div>
                  <div className="row gy-4">
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="chef-member">
                        <div className="member-img">
                          <img
                            src="./img/chefs/chefs-1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="social">
                            <a href="">
                              <i className="bi bi-twitter" />
                            </a>
                            <a href="">
                              <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                              <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                              <i className="bi bi-linkedin" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info">
                          <h4>Walter White</h4>
                          <span>Master Chef</span>
                          <p>
                            Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                            tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                            corporis et voluptate.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Chefs Member */}
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div className="chef-member">
                        <div className="member-img">
                          <img
                            src="./img/chefs/chefs-2.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="social">
                            <a href="">
                              <i className="bi bi-twitter" />
                            </a>
                            <a href="">
                              <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                              <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                              <i className="bi bi-linkedin" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info">
                          <h4>Sarah Jhonson</h4>
                          <span>Patissier</span>
                          <p>
                            Quo esse repellendus quia id. Est eum et accusantium pariatur
                            fugit nihil minima suscipit corporis. Voluptate sed quas
                            reiciendis animi neque sapiente.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Chefs Member */}
                    <div
                      className="col-lg-4 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <div className="chef-member">
                        <div className="member-img">
                          <img
                            src="./img/chefs/chefs-3.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="social">
                            <a href="">
                              <i className="bi bi-twitter" />
                            </a>
                            <a href="">
                              <i className="bi bi-facebook" />
                            </a>
                            <a href="">
                              <i className="bi bi-instagram" />
                            </a>
                            <a href="">
                              <i className="bi bi-linkedin" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info">
                          <h4>William Anderson</h4>
                          <span>Cook</span>
                          <p>
                            Vero omnis enim consequatur. Voluptas consectetur unde qui
                            molestiae deserunt. Voluptates enim aut architecto porro
                            aspernatur molestiae modi.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Chefs Member */}
                  </div>
                </div>
              </section>
              {/* End Chefs Section */}
              {/* ======= Book A Table Section ======= */}
              <section id="book-a-table" className="book-a-table">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <h2>Book A Table</h2>
                    <p>
                      Book <span>Your Stay</span> With Us
                    </p>
                  </div>
                  <div className="row g-0">
                    <div
                      className="col-lg-4 reservation-img"
                      style={{ backgroundImage: "url(./img/reservation.jpg)" }}
                      data-aos="zoom-out"
                      data-aos-delay={200}
                    />
                    <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
                      <form
                        action="forms/book-a-table.php"
                        method="post"
                        role="form"
                        className="php-email-form"
                        data-aos="fade-up"
                        data-aos-delay={100}
                      >
                        <div className="row gy-4">
                          <div className="col-lg-4 col-md-6">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 4 chars"
                            />
                            <div className="validate" />
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              data-rule="email"
                              data-msg="Please enter a valid email"
                            />
                            <div className="validate" />
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              id="phone"
                              placeholder="Your Phone"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 4 chars"
                            />
                            <div className="validate" />
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <input
                              type="text"
                              name="date"
                              className="form-control"
                              id="date"
                              placeholder="Date"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 4 chars"
                            />
                            <div className="validate" />
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              name="time"
                              id="time"
                              placeholder="Time"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 4 chars"
                            />
                            <div className="validate" />
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <input
                              type="number"
                              className="form-control"
                              name="people"
                              id="people"
                              placeholder="# of people"
                              data-rule="minlen:1"
                              data-msg="Please enter at least 1 chars"
                            />
                            <div className="validate" />
                          </div>
                        </div>
                        <div className="form-group mt-3">
                          <textarea
                            className="form-control"
                            name="message"
                            rows={5}
                            placeholder="Message"
                            defaultValue={""}
                          />
                          <div className="validate" />
                        </div>
                        <div className="mb-3">
                          <div className="loading">Loading</div>
                          <div className="error-message" />
                          <div className="sent-message">
                            Your booking request was sent. We will call back or send an
                            Email to confirm your reservation. Thank you!
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit">Book a Table</button>
                        </div>
                      </form>
                    </div>
                    {/* End Reservation Form */}
                  </div>
                </div>
              </section>
              {/* End Book A Table Section */}
              {/* ======= Gallery Section ======= */}
              <section id="gallery" className="gallery section-bg">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <h2>gallery</h2>
                    <p>
                      Check <span>Our Gallery</span>
                    </p>
                  </div>
                  <div className="gallery-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                      <div className="swiper-slide">
                        <a
                          className="glightbox"
                          data-gallery="images-gallery"
                          href="./img/gallery/gallery-1.jpg"
                        >
                          <img
                            src="./img/gallery/gallery-1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          className="glightbox"
                          data-gallery="images-gallery"
                          href="./img/gallery/gallery-2.jpg"
                        >
                          <img
                            src="./img/gallery/gallery-2.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          className="glightbox"
                          data-gallery="images-gallery"
                          href="./img/gallery/gallery-3.jpg"
                        >
                          <img
                            src="./img/gallery/gallery-3.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          className="glightbox"
                          data-gallery="images-gallery"
                          href="./img/gallery/gallery-4.jpg"
                        >
                          <img
                            src="./img/gallery/gallery-4.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          className="glightbox"
                          data-gallery="images-gallery"
                          href="./img/gallery/gallery-5.jpg"
                        >
                          <img
                            src="./img/gallery/gallery-5.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          className="glightbox"
                          data-gallery="images-gallery"
                          href="./img/gallery/gallery-6.jpg"
                        >
                          <img
                            src="./img/gallery/gallery-6.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          className="glightbox"
                          data-gallery="images-gallery"
                          href="./img/gallery/gallery-7.jpg"
                        >
                          <img
                            src="./img/gallery/gallery-7.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a
                          className="glightbox"
                          data-gallery="images-gallery"
                          href="./img/gallery/gallery-8.jpg"
                        >
                          <img
                            src="./img/gallery/gallery-8.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </section>
              {/* End Gallery Section */}
            
            </main>
            {/* End #main */}

            <a
              href="#"
              className="scroll-top d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-arrow-up-short" />
            </a>
            {/* <div id="preloader" /> */}
            {/* Vendor JS Files */}
            {/* Template Main JS File */}
          </>
          );
    }
}
export default Home;