import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Posts() {
  const[user,setUser]=useState([]);
  const [posts,setPosts]=useState([]);
  const[title,setTitle]=useState('');
  const[context,setContext]=useState('');
  const[btnDis,setBtnDis]=useState('block');
  const[formDis,setFormDis]=useState('none');
  const [state,setState]=useState(false);
  const user_id=parseInt(sessionStorage.getItem('user_id'));

  const navigate = useNavigate();
  const goToReceiver = (id) => {
    let post=posts.filter(post => post.id == id);
    sessionStorage.setItem('post_id','');
    sessionStorage.setItem('post_id',id);
    navigate("/post", { state: { post_id:id, post:post }});
  };
  const getPosts=()=>{
    axios.get('http://localhost/project9/PHP/posts.php')
    .then((response)=>{
      setPosts(response.data)
      console.log(posts);
    })
  };
  const submitPost=(e)=>{
    e.preventDefault();
    axios.post('http://localhost/project9/PHP/insertPost.php?user_id='+user_id+'&title='+title+'&body='+context)
    .then(()=>{
      console.log('Success');
      console.log(user_id,title,context);
      setState(true);
    })
    .catch((error)=>{
      console.log('error happened: ',error);
    })
  }
  useEffect(()=>{
    getPosts();
    setState(true);
    console.log(typeof(title),typeof(context),user_id);
  },[title,context,state])

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
    <button className="btn-primary" style={{display: btnDis}} onClick={()=>{setFormDis('block');setBtnDis('none')}}>Insert post</button>
    <form action="" style={{display: formDis}}>
      <label htmlFor="title">Title</label>
      <input type="text" id='title' onChange={(e)=>{setTitle(e.target.value)}}/>
      <label htmlFor="body">Context</label>
      <input type="text" id='body' onChange={(e)=>{setContext(e.target.value)}}/>
      <button className="btn"  onClick={(e)=>submitPost(e)}>Submit post</button>
      <button className="btn" onClick={()=>{setFormDis('none');setBtnDis('block')}}>Cancel</button>
      <br /><br /><br /><br /><br />
    </form>

    </>
  )
}

export default Posts