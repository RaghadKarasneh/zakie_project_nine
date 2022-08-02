import React, { useState } from 'react';
import axios from 'axios';


function Comment(props) {

    const [comment,setComment]=useState();
    const [newComment,setNewComment]=useState();
    const [editDis,setEditDis]=useState({
        formDisplay:'none',
        btnDisplay:'block',
        element:'',
    });
    const [activeComment,setActiveComment]=useState({
        id:null,
        type:null,
    });

    // const isEditing=activeComment && activeComment.id === comment.id && activeComment.type === 'editing';
    const deleteComment=(id)=>{
        axios.post('http://localhost/project9/PHP/insertComment.php?comment_id='+id+'&deleted=true');
        console.log(id,newComment);
        props.setState(true);
    }
    const changeComment=(id)=>{
        if (newComment) {  
            axios.post('http://localhost/project9/PHP/insertComment.php?comment_id='+id+'&new_comment='+newComment);
            console.log(id,newComment);
        }
        setNewComment('');
        setEditDis({formDisplay:'none',btnDisplay:'block',element:''});
        props.setState(true);
    }
    const handleSubmit=(postId)=>{
        axios.post('http://localhost/project9/PHP/insertComment.php?userId='+props.user_id+'&postId='+postId+'&comment='+comment);
        setComment('');
        props.setState(true);
    };
  


  const userId=localStorage.getItem('userId');

  return (
    <>
            {/* <!-- comments
        ================================================== --> */}
        <div className="comments-wrap">

<div id="comments" className="row">
    <div className="column">

        <h3>Users Comments</h3>

        {/* <!-- START commentlist --> */}
        <ol className="commentlist">
        {/* ) */}
            {props.comments ? props.comments.filter(comment => (comment.deleted != 1 && comment.post_id === sessionStorage.getItem('post_id'))).map(filteredComment =>
                (
                    <li className="depth-1 comment" key={filteredComment.id+1}>

                    <div className="comment__avatar">
                        <img className="avatar" src="images/avatars/user-01.jpg" alt="" width="50" height="50" />
                    </div>

                    <div className="comment__content">

                        <div className="comment__info">
                            <div className="comment__author">{filteredComment.name}</div>

                            <div className="comment__meta">
                                <div className="comment__time">{filteredComment.created_at}</div>
                                <div className="comment__reply">
                                </div>
                            </div>
                        </div>

                        <div className="comment__text">
                        <p>{filteredComment.comment}</p>

                        {filteredComment.user_id == props.user_id ? 
                        <div>
                            <button className='btn xxs' onClick={(e)=>{e.preventDefault();deleteComment(filteredComment.id)}}>Delete</button>
                            <button className='btn xxs' 
                            onClick={(e)=>{e.preventDefault();setEditDis({formDisplay:'block',btnDisplay:'none',element:filteredComment.id})}} key={filteredComment.id+4}
                            style={{display: filteredComment.id === editDis.element? editDis.btnDisplay : 'block'}}
                            >edit</button>
                            <form action="" key={filteredComment.id} style={{display: filteredComment.id === editDis.element? editDis.formDisplay : 'none'}} >
                            <input type="text xs"
                            value={newComment}
                            onChange={(e)=>{setNewComment(e.target.value)}}
                            />
                            <button className='btn xxs ' 
                            key={filteredComment.id+2}
                            onClick={(e)=>{e.preventDefault();changeComment(filteredComment.id)}}
                            >edit comment</button>
                            <button className='btn xxs' 
                            onClick={(e)=>{e.preventDefault();setEditDis({display:'none',element:''})}} key={filteredComment.id+3}>Cancel</button>
                            </form>
                        </div>: ''}
                        
                        </div>

                    </div>

                </li>
                )) : ""}
            
        </ol>

     </div> {/* <!-- end col-full --> */}
 </div> {/* <!-- end comments --> */}

    <div className="row comment-respond">

    {/* <!-- START respond --> */}
    <div id="respond" className="column">
        <h3>Add Comment</h3>
    <form name="commentForm" id="commentForm" method="post" action="" autoComplete="off">

        <div className="form-floating">
            <textarea className="form-control border-0 bg-light" placeholder="Leave a comment here" id="comment" style={{height: "150px"}} name="comment" onChange={(e)=>{setComment(e.target.value)}} value={comment}></textarea>
            <label htmlFor="comment">Comment</label>
        </div>

        <input name="submit" id="submit" className="btn btn--primary btn-wide btn--large h-full-width" value="Add Comment" type="submit" onClick={(e)=>{e.preventDefault();handleSubmit(sessionStorage.getItem('post_id'))}} />

    </form> 
    </div>
 

 </div> 
 </div> 
    </>
  )
}

export default Comment;
