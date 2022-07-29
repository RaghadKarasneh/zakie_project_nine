import React from 'react';
import axios from 'axios';


function Comment() {

  const userId=localStorage.getItem('userId');
  const setComment=(e)=>{
    e.preventDefault();    
    axios.post('')
    .then((response)=>{
  })};

  return (
    <form name="commentForm" id="commentForm" method="post" action="" autoComplete="off">

        <div className="form-floating">
            <textarea className="form-control border-0 bg-light" placeholder="Leave a comment here" id="comment" style={{height: "150px"}} name="comment"></textarea>
            <label htmlFor="comment">Comment</label>
        </div>

        <input name="submit" id="submit" className="btn btn--primary btn-wide btn--large h-full-width" value="Add Comment" type="submit" />

    </form> 
  )
}

export default Comment;
