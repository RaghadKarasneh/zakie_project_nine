import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './auction.css';
import {Link } from 'react-router-dom';



function Auction(props) {
  const [aution, setAution] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost/project9/PHP/api/API/admincomment.php`)
      // console.log(aa)
      .then((res) => {
        //  console.log(res)
        const info = res.data;
        setAution(info);
      });

  })

    return(
        <>
  <link
    href="https://fonts.googleapis.com/css?family=Lato:400,300,700" rel="stylesheet"  type="text/css" />
  <div className="app-container">
  <nav className="navv">
      <img src='/logo.png' width={'100px'} style={{marginInline:'30px'}} />
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to="/dashboard" className="nav__item-link">
           <h2 style={{color:'goldenrod'}}>Dashboard</h2> </Link>
        </li>
        <li className="nav__list-item nav__list-item--active">
          <a href="#" className="nav__item-link">
            Auction
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__item-link">
            Users
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__item-link">
            Comments
          </a>
        </li>
        <li className="nav__list-item">
        <Link to="/loginA" className="nav__item-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
    <div className="app-view">
      <nav className="utility-bar">
        <div className="utility-bar__inner">
          <ul className="utility-bar__list">
            <li className="utility-bar__list-item">
              {/* Admin  */}
            </li>
          </ul>
          <a href="#" className="utility-bar__account">
            <span className="utility-bar__account-avatar" />
            <span className="utility-bar__account-name">ِadmin@mail.com</span>
          </a>
        </div>
      </nav>
      <main className="content">
        {/* <div className="d-flex"> */}
        <h1>Auctions</h1>
        {/* <button className="bttn btn-add">Add </button>; */}
        <Link to="/AddAuctionAdmin" className="bttn btn-add"><h2><span>Add</span></h2> </Link>
        {/* </div> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>image</th>
              <th>Description</th>
              <th>Minimam Price</th>
              <th>Top Price</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {aution?.map((info) =>
            <>
            <tr className='td-data' key={info}>
              <th>{info.id}</th>
              <th>{info.name}</th>
              <th><img src={info.img} style={{width:'100px', height:'100px'}}/></th>
              <th>{info.description}</th>
              <th>{info.min_price}</th>
              <th>{info.top_price}</th>
              <th>{info.start_date}</th>
              <th>{info.end_data}</th>
              <td>
                {/* <button className="btn">Edit</button> */}
                <Link to={`/EditAuctionAdmin/${info.id}/edit`} className="btn" style={{borderRadius:'12px'}}>Edit</Link>
                {/* <button className="btn btn-delete">Delete</button> */}
                <Link to="/AddAuctionAdmin" className="btn btn-delete" style={{borderRadius:'12px'}}>Delete</Link>
              </td>
            </tr>
            </>
       )}
            
          </tbody>
        </table>
      </main>
    </div>
  </div>
</>


        );
    }


export default Auction;