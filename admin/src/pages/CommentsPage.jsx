import React from "react";
import adminLayout from "../hoc/adminLayout";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class CommentsPage extends React.Component {
    constructor(props)
    {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
        this.state = 
        {
            comments:[],
        }
    }
    deleteComment(e,id)
    {
        e.preventDefault();
        axios.post('http://localhost/zakie_project_nine/admin/PHP/deletecomment.php?id='+id);
        this.setState({ render: true });
    }
    componentDidMount(){
        axios.get('http://localhost/zakie_project_nine/admin/PHP/comments.php')
        .then((res)=>{
          this.setState({comments: res.data});
          console.log(this.state.comments);
        })
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.render !== this.state.render) {
            
            axios.get('http://localhost/zakie_project_nine/admin/PHP/comments.php')
            .then((res)=>{
                this.setState({comments: res.data});
                console.log(this.state.comments);
                this.setState({ render: false });
            })
        }
    }

    render(){
        return <>
                        <div className="table-container">
                <div className="row">
                    <div className="col">
                        <h5 className="pb-2 mb-0">Comments Table</h5>
                    </div>
                    {/* <div className="col text-right">
                        <button className="btn btn-default low-height-btn">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div> */}
                </div>
                <p>
                    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </p>
                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th><input type="checkbox"/></th> */}
                                <th>ID</th>
                                <th>User ID</th>
                                <th>Post Id</th>
                                <th>Comment</th>
                                <th>Created On</th>
                                <th>Updated On</th>
                                <th>Deleted</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.comments && this.state.comments.map(comment =>
                            {return(
                                    <tr>
                                    <td>{comment.id}</td>
                                    <td>{comment.user_id}</td>
                                    <td>{comment.post_id}</td>
                                    <td>{comment.comment}</td>
                                    <td>{comment.created_at}</td>
                                    <td>{comment.updated_at}</td>
                                    <td>{comment.deleted == 1? 'Deleted':'Active'}</td>
                                    <td></td>
                                    <td>
                                        <div className="dropdown table-action-dropdown">
                                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                                {/* <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                                <div className="dropdown-divider"></div> */}
                                                <li><button className="dropdown-item text-danger" 
                                                onClick={(e)=>{this.deleteComment(e,comment.id)}}><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</button></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            )})}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    }
}

export default adminLayout(CommentsPage);