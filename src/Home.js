import React, { Component } from 'react';
import './css/main.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UilClipboardAlt ,UilStar ,UilPlayCircle,UilCrockery,UilClock} from '@iconscout/react-unicons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Menu from './Components/Menu';

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
                    Healthy plans. Highest quality ingredients. Affordable prices.
                    </p>
                    <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                      <a href="/Pricing" className="btn-book-a-table">
                        Book a Plan
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
                        <h3>Why Choose Zaki?</h3>
                        <p className='mt-4'>
                        In our restaurant, you can choose the meals that suit your daily calorie need, and you can choose the meals by subscribing with us in our plans to organize your daily meals.
                        </p>
                        <div className="text-center">
                          <a href="/about" className="more-btn">
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
                            <h4>Calorie Tracker</h4>
                            <p>
                              To be able to track your calories to become more healther.
                            </p>
                          </div>
                        </div>
                        {/* End Icon Box */}
                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
                          <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                            <UilCrockery className="bi bi-gem" />
                            <h4>Different selections of Organic food</h4>
                            <p>
                              We have added different selections of food to help you with your exercises and to match your taste.
                            </p>
                          </div>
                        </div>
                        {/* End Icon Box */}
                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
                          <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                            <UilClock className="bi bi-inboxes" />
                            <h4>Avalible 24/7</h4>
                            <p>
                              We have organized our time table to track yours to always be there for you.
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
                        >200</span>
                        <h3 style={{color:"white"}}> Clients per month</h3>
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
                        >7</span>
                        <h3 style={{color:"white"}}>Projects a year</h3>
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
                        >24</span>
                        <h3 style={{color:"white"}}> Hours Of Support</h3>
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
                        >365</span>
                        <h3 style={{color:"white"}}>Days here for you </h3>
                      </div>
                    </div>
                    {/* End Stats Item */}
                  </div>
                </div>
              </section>
              {/* End Stats Counter Section */}
              {/* ======= Menu Section ======= */}
              <Menu />
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
                                  It was a great experience for me, I liked the accuracy of the calculation of the calories I needed in my meal to maintain my weight.
                                  <i className="bi bi-quote quote-icon-right" />
                                </p>
                                <h3>Aya Alsawa</h3>
                                <h4> customer</h4>
                                <div className="stars">
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 text-center">
                              <img
                                src="./img/testimonials/aya.png"
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
                                One of the most wonderful restaurants I have dealt with, the staff in it are kind and understanding.
                                  <i className="bi bi-quote quote-icon-right" />
                                </p>
                                <h3>Samar alkhamis</h3>
                                <h4>customer</h4>
                                <div className="stars">
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 text-center">
                              <img
                                src="./img/testimonials/samar.jpg"
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
                                  It was a nice experience, I loved the food and the quality of the ingredients, as well as the deliciousness of the meals.
                                  <i className="bi bi-quote quote-icon-right" />
                                </p>
                                <h3>Saja Al Ghalayini</h3>
                                <h4>customer</h4>
                                <div className="stars">
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 text-center">
                              <img
                                src="./img/testimonials/saja.png"
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
                                  It became easier for me to eat meals on a regular basis while doing my work, in proportion to my need for daily calories, I loved this experience.
                                  <i className="bi bi-quote quote-icon-right" />
                                </p>
                                <h3>Dua-Alsafasfeh</h3>
                                <h4>customer</h4>
                                <div className="stars">
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                  <UilStar className="bi bi-star-fill" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 text-center">
                              <img
                                src="./img/testimonials/dua.png"
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
              {/* <section id="events" className="events">
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
                      </div> */}
                      {/* End Event item */}
                      {/* <div
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
                      </div> */}
                      {/* End Event item */}
                      {/* <div
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
                      </div> */}
                      {/* End Event item */}
                    {/* </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </section> */}
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
                            src="../../img/chefs/chefs-1.jpg"
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
              {/* <section id="book-a-table" className="book-a-table">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <h2>Book A Plan</h2>
                    <p>
                      Book <span>Your Plan</span> With Us
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
                          <button type="submit">Book a Plan</button>
                        </div>
                      </form>
                    </div> */}
                    {/* End Reservation Form */}
                  {/* </div>
                </div>
              </section> */}
              {/* End Book A Table Section */}
            </main>
            {/* End #main */}

            <a
              href="#"
              className="scroll-top d-flex align-items-center justify-content-center"
            >
            </a>
            {/* <div id="preloader" /> */}
            {/* Vendor JS Files */}
            {/* Template Main JS File */}
          </>
          );
    }
}
export default Home;