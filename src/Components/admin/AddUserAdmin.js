import React, {useState} from 'react';
import axios from 'axios';
import './addAuc.css';

function AddAuctionAdmin() {

    const[isSubmit,setSubmit]=useState([]);
    const [fname, setFname] = useState([]);
    const [lname, setLname] = useState([]);
    const [email, setEmail] = useState([]);
    const [phone, setPhone] = useState([]);
    const [password, setPassword] = useState([]);
    const [address, setAddress] = useState([]);


    const fnameHandel = (e)=>{setFname(e.target.value)}
    const lnameHandel = (e)=>{setLname(e.target.value)}
    const emailHandel = (e)=>{setEmail(e.target.value)}
    const phoneHandel = (e)=>{setPhone(e.target.value)}
    const passwordHandel = (e)=>{setPassword(e.target.value)}
    const addressHandel = (e)=>{setAddress(e.target.value)}

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost/project9/PHP/api/API/adduser.php?firstname='+fname+'&lastname='+lname+'&email='+email+'&phone='+phone+'&password='+password+'&address='+address)
        .then((data) => {
            console.log("success!");
            setSubmit(!isSubmit)
        })
        .catch((error) => {
            console.error(error);
        });
    }   
    return(
        <>
        <div className="containerr">
  <div className="title">
      <h2> Added Auctions </h2>
  </div>

<div className="d-flex">
  <form action="" method="" className='formm' onSubmit={handleSubmit}>
      <span className="name">User First Name <span className="required" >*</span></span>
      <input type="text" name="name" required onChange={fnameHandel}/>

      <span className="name">User Last Name <span className="required" >*</span></span>
      <input type="text" name="name" required onChange={lnameHandel}/>

      <span className="des">Email <span className="required" >*</span></span>
      <input type="text" name="des" required onChange={emailHandel}/>

      <span>Phone <span className="required">*</span></span>
      <input type="file" id="img" name="img" accept="image/*" required onChange={phoneHandel}/>
      {/* <input type="submit" /> */}

      <span>Password <span className="required">*</span></span>
      <input type="number" name="price" required onChange={passwordHandel}/> 

      <span>Address <span className="required">*</span></span>
      <input type="date" name="start"  required onChange={addressHandel}/> 

    <button type="submit">Confirm add </button>
  </form>
  </div>
 </div>

        </>
        
    );
    
}
export default AddAuctionAdmin;