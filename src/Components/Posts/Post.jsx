import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Comment from './Comments/Comment';

function Post() {

    const [comments,setComments]=useState([]);
    const[user,setUser]=useState([]);
    const [posts,setPosts]=useState([]);
    const [post,setPost]=useState([]);
    const [state,setState]=useState(false);






    const CommentData=() => {
        axios.get('http://localhost/project9/PHP/comments.php')
        .then((response)=>{
        setComments(response.data)
        console.log(comments);
    })};

    useEffect(()=>{
        CommentData();
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
                            <img src="images/thumbs/single/standard/standard-1050.jpg" 
                                 srcSet="images/thumbs/single/standard/standard-2100.jpg 2100w, 
                                         images/thumbs/single/standard/standard-1050.jpg 1050w, 
                                         images/thumbs/single/standard/standard-525.jpg 525w" sizes="(max-width: 2100px) 100vw, 2100px" alt="" />
                        </div>
                    </div> {/* <!-- end s-content__media --> */}

                    <div className="s-content__primary container">

                        <h2 className="s-content__title s-content__title--post">Hey, This Is A Standard Format Post.</h2>

                        <ul className="s-content__post-meta">
                            <li className="date">September 05, 2020</li>
                            <li className="cat"><a href="">Frontend</a><a href="">Design</a></li>
                        </ul>

                        <p className="lead">
                        Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor 
                        sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat 
                        enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco 
                        magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum 
                        adipisicing aliqua ea nisi sint. Unde quod at minus quia velit ipsa ea qui. </p> 

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
                                <a href="#" rel="prev">
                                    <span>Previous</span>
                                    Tips on Minimalist Design 
                                </a>
                            </div>
                             <div className="next-nav">
                                 <a href="#" rel="next">
                                     <span>Next</span>
                                    Less Is More 
                                 </a>
                             </div>
                         </div> {/* <!-- end s-content__pagenav --> */}

                    </div> {/* <!-- end s-content__primary --> */}
                </article>

            </div> {/* <!-- end column --> */}
        </div> {/* <!-- end row --> */}






                    <Comment  user_id={1} post_id={1} comments={comments} setState={setState}/>


        
    </section> 
  )
}

export default Post