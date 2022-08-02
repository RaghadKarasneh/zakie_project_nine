import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Comment from './Comments/Comment';
import { useLocation,useNavigate } from "react-router-dom";



function Post() {

    const [comments,setComments]=useState([]);
    const[user,setUser]=useState([]);
    const [posts,setPosts]=useState([]);
    const [state,setState]=useState(false);
    const location = useLocation();

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


    const navigate = useNavigate();
    const goToReceiver = (id) => {
    let post=posts.filter(post => post.id == id);
    sessionStorage.setItem('post_id','');
    sessionStorage.setItem('post_id',id);
    navigate("/post", { state: { post_id:id, post:post }});
    }

    const CommentData=() => {
        console.log('post ID :',sessionStorage.getItem('post_id'));
        axios.get('http://localhost/project9/PHP/comments.php')
        .then((response)=>{
            setComments(response.data)
            console.log(comments);
            console.log('post_id:',comments[0].post_id);
        })};
        
        const comment=setTimeout(()=>{
            console.log('post Data is:',posts);
            },3000);
        useEffect(()=>{
            CommentData()
        setState(false);
        // const postData=setTimeout(()=>{axios.get('')
        // .then((response)=>{
        //     setPost(response.data)
        //     console.log(post);
        // })},
        // postData();
    },[state])



    

  return (

        <section className="s-content s-content--single">
        <div className="row container">
            <div className="column large-12 container">

                <article className="s-post entry format-standard">

                    <div className="s-content__media container">
                        <div className="s-content__post-thumb">
                            <img src="https://images.template.net/wp-content/uploads/2018/03/Useful-Restaurant-Review-Card-Templates.jpg" 
                                 srcSet="https://images.template.net/wp-content/uploads/2018/03/Useful-Restaurant-Review-Card-Templates.jpg 2100w, 
                                 https://images.template.net/wp-content/uploads/2018/03/Useful-Restaurant-Review-Card-Templates.jpg 1050w, 
                                 https://images.template.net/wp-content/uploads/2018/03/Useful-Restaurant-Review-Card-Templates.jpg 525w" sizes="(max-width: 2100px) 100vw, 2100px" alt="" />
                        </div>
                    </div> {/* <!-- end s-content__media --> */}
                    {posts ? posts.filter(post => (post.id === sessionStorage.getItem('post_id'))).map(post => 
                    (
                    <div className="s-content__primary container">

                        <h2 className="s-content__title s-content__title--post">{post.title}</h2>

                        <ul className="s-content__post-meta">
                            <li className="date">{post.created_at}</li>
                            <li className="cat"><a href="">Frontend</a><a href="">Design</a></li>
                        </ul>

                        <p className="lead">{post.body}</p> 

                        <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                        </p>

                        <div className="s-content__author container">
                            <img src="images/avatars/user-06.jpg" alt="" />

                            <div className="about">
                                <h5><a href="#">Jonathan Smith</a></h5>

                                <ul className="author-social">
                                    <li><a href="#0">Facebook</a></li>
                                    <li><a href="#0">Twitter</a></li>
                                    <li><a href="#0">Dribbble</a></li>
                                    <li><a href="#0">Instagram</a></li>
                                </ul>
                            </div>
                        </div> {/* <!-- end s-content__author --> */}
                        

                        <div className="s-content__pagenav group">
                            <div className="prev-nav">
                                <a href="#" rel="prev"
                                onClick={()=>{goToReceiver(parseInt(post.id)-1)}}>
                                    <span>Previous</span>
                                </a>
                            </div>
                             <div className="next-nav">
                                <a href="#" rel="next"
                                 onClick={()=>{goToReceiver(parseInt(post.id)+1)}}>
                                     <span>Next</span>
                                </a>
                             </div>
                         </div> 

                    </div> 
                    )): ''}
                </article>

            </div> {/* <!-- end column --> */}
        </div> {/* <!-- end row --> */}






                    <Comment  comments={comments} user_id={sessionStorage.getItem('user_id')} setState={setState} />
 

        
    </section> 
  )
}

export default Post