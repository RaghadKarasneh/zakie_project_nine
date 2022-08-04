import axios from 'axios';
import React, { useState } from 'react';
import '../css/subscribe.css';

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
    
    const gender=sessionStorage.getItem('gender');
    const weight=sessionStorage.getItem('weight');
    const height=sessionStorage.getItem('height');
    const age=sessionStorage.getItem('age');
    const user_id=sessionStorage.getItem('user_id');
    const calories=sessionStorage.getItem('calories');
    const package_type= sessionStorage.getItem('pricing_package');
    const clickHandle=(e)=>{
        e.preventDefault();
        axios.post('http://localhost/project9/PHP/userInfo.php?city='+city+'&address='+address+'&zip_code='+zip_code+'&phone_number='+phone_number+'&message='+message+'&gender='+gender+'&weight='+weight+'&height='+height+'&age='+age+'&id='+user_id+'&calories='+calories+'&package_type'+package_type).then(()=>{
            console.log("success!");
            console.log(city,address,zip_code,phone_number,message,gender,weight,height,age,user_id,calories,package_type);
            alert("we recieved your application ");
        }).catch((error)=>{
            console.error(error);
        });
    }
    return(
        <>
 
  <title style={{marginTop:'52vh !important'}}>Contact Form #1</title>
  <div className="content ">
 
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="row align-items-center">
            <div className="col-lg-12 mb-5 mb-lg-0">
              <h2 style={{marginBottom:'70px'}}>
                Fill the form for Healthy 
                <br></br>follow-up service
              </h2>
              <form
                className="border-right pr-5 mb-5"
                method="post"
                id="contactForm"
                name="contactForm"
              >
                <div className="row">
                <div className="col-md-4 form-group">
                    
                    <select
                className="form-control activity"
                name="city" onChange={setCityHandle}
              >

                        <option value="">Choose Your City</option>
                        <option value="Amman">Amman </option>
                        <option value="Aqaba">Aqaba</option>
                        <option value="Irbid">Irbid</option>
                    </select>
                  </div>
                  
                
                
                  
                <div className="col-md-4 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="zip_code"
                      id="zip_code"
                      placeholder="Zip Code"
                      onChange={setZipCodeHandle}
                    />
                  </div>
               
                
                <div className="col-md-4 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      id="address"
                      placeholder="Address"
                      onChange={setAddressHandle}
                    />
                  </div>
                
                
                  <div className="col-md-4 form-group">
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
                
                
                  <div className="col-md-12 form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      cols={30}
                      rows={7}
                      placeholder="Add any notes/ Food you don't like/ Allergic to certain foods/ Chronic diseases"
                      defaultValue={""}
                      onChange={setMessageHandle}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 subscribe-button">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-primary rounded-0 py-2 px-4 mt-3"
                      onClick={(e)=>{clickHandle(e)}}
                    />
                    <span className="submitting mt-3" />
                  </div>
                </div>
                
              </form>
              <div id="form-message-warning" className=' mt-4' />
              <div id="form-message-success">
                Your message was sent, thank you!
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