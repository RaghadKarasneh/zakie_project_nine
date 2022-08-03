import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../../css/posts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Radium from 'radium';


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
    axios.get('http://localhost/zakie_project_nine/PHP/posts.php')
    .then((response)=>{
      setPosts(response.data)
      console.log(posts);
    })
  };
  const submitPost=(e)=>{
    e.preventDefault();
    axios.post('http://localhost/zakie_project_nine/PHP/insertPost.php?user_id='+user_id+'&title='+title+'&body='+context)
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
    setState(false);
    console.log(typeof(title),typeof(context),user_id);
  },[title,context,state])

  return (
    <>
    {sessionStorage.getItem('user_id') && 
        <div className='container d-flex justify-content-center ' style={{width: '50%', marginTop:'150px'}}>
        <Button className="bttn insertButton btn-light lg" style={{display: btnDis,border: '1px solid gray',backgroundColor: 'red !important', color:'#fff', width: '100%', borderRadius: '20px',marginBottom: '100px'}} onClick={()=>{setFormDis('block');setBtnDis('none')}}><span className='h4' style={{color: 'rgb(255, 255, 255)', }}>POST NOW</span></Button>
        <Form style={{display: formDis}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Title"
            className=""
          >
            <Form.Control type="text" placeholder="Enter email" onChange={(e)=>{setTitle(e.target.value)}} style={{ height: '4rem',border: '1px solid red'}}/>
            </FloatingLabel>
          </Form.Group>
    
          <FloatingLabel
            controlId="floatingInput"
            label="Context"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="what you want to say ?" style={{ height: '7rem',border: '1px solid red'}} onChange={(e)=>{setContext(e.target.value)}}/>
            </FloatingLabel>
          <Button variant="light" className='bttn' type="submit" onClick={(e)=>submitPost(e)} style={{width: '15rem', height: '4rem'}}>
            Submit Post
          </Button>
          <Button variant="light" className='bttn' type="submit" onClick={(e)=>{e.preventDefault();setFormDis('none');setBtnDis('block')}} style={{width: '10rem', height: '4rem'}}>
            Cancel
          </Button>
        </Form>
        </div>
    }

    <Row xs={3} md={3} className="g-4" style={{marginBottom:'70px'}} >
    {posts.map(post =>{
      return(
        <Col lg="8" style={{boxShadow: '6px 5px 10px grey',height: '150px',margin: '20px auto'}}>
      
          {/* <Card.Img variant="top" src="https://images.template.net/wp-content/uploads/2018/03/Useful-Restaurant-Review-Card-Templates.jpg" /> */}
          
            
            <h3 style={{display:'inline-block', width:'50%',  marginLeft: '50px'}}>
            {post.excerpt}
            </h3>
            <button className='bttn col-lg-4' variant="light" onClick={()=>{goToReceiver(post.id)}} style={{display:'inline-block', width:'30%',
    height: '55px'}}>Read More</button>
         
       
        </Col>
      )
    })}
    </Row>
  
    

    </>
  )
}

export default Posts