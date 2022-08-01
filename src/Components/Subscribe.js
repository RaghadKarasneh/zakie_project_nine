import axios from 'axios';
import React, { useState } from 'react';
import '../css/subscribe.css'
function Subscribe() {
    const [city,setCity]=useState("");
    const [address,setAddress]=useState("");
    const[zip_code,setZipCode]=useState("");
    const[phone_number,setPhoneNumber]=useState(0);
    const[message,setMessage]=useState("");

    const setCityHandle=(e)=>{setCity(e.target.value)}
    const setAddressHandle=(e)=>{setAddress(e.target.value)}
    const setZipCodeHandle=(e)=>{setZipCode(e.target.value)}
    const setPhoneNumberHandle=(e)=>{setPhoneNumber(e.target.value)}
    const setMessageHandle=(e)=>{setMessage(e.target.value)}

    const clickHandle=()=>{
        axios.post('http://localhost/zakie_project_nine/PHP/userInfo.php?city='+city+'&address='+address+'&zip_code='+zip_code+'&phone_number='+phone_number+'&message'+message+'&id='+sessionStorage.getItem('user_id')+'&gender='+sessionStorage.getItem('gender')+'&weight='+sessionStorage.getItem('weight')+'&age='+sessionStorage.getItem('age')).then((data)=>{
            console.log("success!");
        }).ctach((error)=>{
            console.error(error);
        });
    }
    return(
        <>
 
  <title>Contact Form #1</title>
  <div className="content">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <h2 className="mb-5">
                Fill the form. <br /> It's easy.
              </h2>
              <form
                className="border-right pr-5 mb-5"
                method="post"
                id="contactForm"
                name="contactForm"
              >
                <div className="row">
                <div className="col-md-6 form-group">
                    <select className="form-control" name="city" onChange={setCityHandle}>
                        <option value="">Choose Your City</option>
                        <option value="Amman">Amman </option>
                        <option value="Aqaba">Aqaba</option>
                        <option value="Irbid">Irbid</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      id="address"
                      placeholder="Address"
                      onChange={setAddressHandle}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="zip_code"
                      id="zip_code"
                      placeholder="Zip Code"
                      onChange={setZipCodeHandle}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="phone_number"
                      id="phone_number"
                      placeholder="0777777777"
                      pattern="[0-9]+"
                      onChange={setPhoneNumberHandle}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      cols={30}
                      rows={7}
                      placeholder="Add any notes"
                      defaultValue={""}
                      onChange={setMessageHandle}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-primary rounded-0 py-2 px-4"
                      onClick={clickHandle}
                    />
                    <span className="submitting" />
                  </div>
                </div>
              </form>
              <div id="form-message-warning mt-4" />
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            </div>
            <div className="col-lg-4 ml-auto">
              <h3 className="mb-4">Let's talk about everything.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                deleniti itaque similique magni. Magni, laboriosam perferendis
                maxime!
              </p>
              <p>
                <a href="#">Read more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    )
}
export default Subscribe;