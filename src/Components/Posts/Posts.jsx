import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Posts() {
  const[user,setUser]=useState([]);
  const [posts,setPosts]=useState([]);

  const navigate = useNavigate();
  const goToReceiver = (id) => {
    let post=posts.filter(post => post.id == id);
    sessionStorage.setItem('post_id','');
    sessionStorage.setItem('post_id',id);
    navigate("/post", { state: { post_id:id, post:post }});
  }
  const getPosts=()=>{
    axios.get('http://localhost/project9/PHP/posts.php')
    .then((response)=>{
      setPosts(response.data)
      console.log(posts);
    })
  }
  useEffect(()=>{
    getPosts();
  },[])

  return (
    <>
    {posts.map(post =>{
      return(
        <div className="card">
          <img src={'images/avatars/'+post.image} alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.excerpt}</p>
            <button className="btn-primary" onClick={()=>{goToReceiver(post.id)}}>Read more</button>
          </div>
        </div>
      )
    })}
    </>
  )
}

export default Posts