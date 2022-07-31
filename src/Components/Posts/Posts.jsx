import axios from 'axios';
import React, { useState,useEffect } from 'react'

function Posts() {
  const[user,setUser]=useState([]);
  const [posts,setPosts]=useState([]);

  const getPosts=setTimeout(()=>{
    axios.get('http://localhost/project9/PHP/posts.php')
    .then((response)=>{
      setPosts(response.data)
      console.log(posts);
    })
  },1000)
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
            <button className="btn-primary">Read more</button>
          </div>
        </div>
      )
    })}
    </>
  )
}

export default Posts