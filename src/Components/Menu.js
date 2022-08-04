import React, { Component } from 'react';
class Menu extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <section id="menu" className="menu">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    {/* <h2>Our Menu</h2> */}
                    <p>
                      Check Our <span>Zakie Main Dishes</span>
                    </p>
                  </div>
                  <ul
                    className="nav nav-tabs d-flex justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    {/* <li className="nav-item">
                      <a
                        className="nav-link active show"
                        data-bs-toggle="tab"
                        data-bs-target="#menu-starters" style={{backgroundColor:'#ce1212'}}
                      >
                        <h4 style={{color:'white'}}>Lunch</h4>
                      </a>
                    </li> */}
                    {/* End tab nav item */}
                    {/* <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#menu-breakfast"
                      >
                        <h4>Breakfast</h4>
                      </a> */}
                      {/* End tab nav item */}
                    {/* </li> */}
                    {/* <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#menu-lunch"
                      >
                        <h4>Lunch</h4>
                      </a>
                    </li> */}
                    {/* End tab nav item */}
                    {/* <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#menu-dinner"
                      >
                        <h4>Dinner</h4>
                      </a>
                    </li> */}
                    {/* End tab nav item */}
                  </ul>
                  <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
                    <div className="tab-pane fade active show" id="menu-starters">
                      <div className="tab-header text-center">
                        {/* <p>Menu</p> */}
                        {/* <h3>Menu</h3> */}
                      </div>
                      <div className="row gy-5">
                        <div className="col-lg-4 menu-item">
                          <a href="../public\img\main-menu\lunch\Kofta Bi Tahini-lunch.png" className="glightbox">
                            
                            <img
                              src="../../img/main-menu/lunch/Kibbeh Bi Laban-lunch.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Kofta Bi Tahini
</h4>
                          <p className="ingredients">
                          Minced kebab, thin slices of potato, and thick tahini sauce
         </p>                <p className="price">1.50 JD</p>
                        </div>
                           {/* Menu Item */}
                           <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-6.png" className="glightbox">
                            <img
                              src="../../img/main-menu/lunch/Zarb-lunch.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Zarb-lunch</h4>
                          <p className="ingredients">
                          Smoked, steamed, and grilled lamb with rice 
                          </p>
                          <p className="price">7.50 JD</p>
                        </div>
                        {/* Menu Item */}
                       
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-3.png" className="glightbox">
                            <img
                              src="./img/main-menu/lunch/Musakhan-lunch.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Musakhan</h4>
                          <p className="ingredients">
                          Bread, chicken, onions, allspice, cinnamon, and lots of olive oil
                          </p>
                          <p className="price">4.00 JD</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-4.png" className="glightbox">
                            <img
                              src="./img//main-menu/lunch/Mansaf-lunch.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Mansaf</h4>
                          <p className="ingredients">
                          Rice, lamb, and jameed
                          </p>
                          <p className="price">7.50 JD</p>
                        </div>
                        {/* Menu Item */}
                        <div className="col-lg-4 menu-item">
                          <a href="./img/menu/menu-item-5.png" className="glightbox">
                            <img
                              src="./img/main-menu/lunch/Shish Kebabs-lunch.png"
                              className="menu-img img-fluid"
                              alt=""
                            />
                          </a>
                          <h4>Shish Kebabs</h4>
                          <p className="ingredients">
                          Minced lamb, parsley, and salt
                          </p>
                          <p className="price">8.50 JD</p>
                        </div>
                       {/* Menu Item */}
                        <div className="col-lg-4 menu-item rounded-3">
                          <a href="../../img/menu/menu-item-2.png" className="glightbox">
                            <img
                              src="../../img/main-menu/lunch\Kofta Bi Tahini-lunch.png"
                             
                              className="menu-img img-fluid rounded-4"
                              alt=""
                            />
                          </a>
                          <h4>Kibbeh Bi Laban</h4>
                          <p className="ingredients">
                          Fried nuggets of minced meat, onions, spices, wrapped in a crust of bulger wheat, and cooked with Laban yoghurt sauce
                          </p>
                          <p className="price">1.50 JD</p>
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
            </>
        );
    }
}
 
export default Menu;