import React from "react";
import adminLayout from "../hoc/adminLayout";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class PostsPage extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenEdit = this.handleOpenEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
        this.addTitle = this.addTitle.bind(this);
        this.addBody = this.addBody.bind(this);
        this.addPost = this.addPost.bind(this);
        this.editPost=this.editPost.bind(this);
        this.deletePost=this.deletePost.bind(this);
        this.state = 
        {
            posts:[],
            id:'',
            title:'',
            body:'',
            showModal: false,
            showEdit: false,
            render: false,
        }
    }
    handleOpenModal (e) {
        e.preventDefault();
        this.setState({ showModal: true });
    }
      
    handleCloseModal (e) {
        e.preventDefault();
        this.setState({ showModal: false });
        console.log(this.state.showModal);
    }
    handleOpenEdit (e,data) {
        e.preventDefault();
        this.setState({ id: data.id});
        this.setState({ title: data.title});
        this.setState({ body: data.body});
        this.setState({ showEdit: true});
        console.log(this.state.showEdit);
    }
      
    handleCloseEdit (e) {
        e.preventDefault();
        this.setState({ showEdit: false });
        console.log(this.state.showEdit);
    }
    addTitle(e){
        this.setState({ title: e.target.value });
    }
    addBody(e){
        this.setState({ body: e.target.value });
    }
    addPost(e) {
        e.preventDefault();
        axios.post('http://localhost/project9/admin/PHP/addpost.php?title='+this.state.title+'&body='+this.state.body);
        this.setState({ showModal: false });
        this.setState({ render: true });
    }
    editPost(e)
    {
        e.preventDefault();
        axios.post('http://localhost/project9/admin/PHP/editpost.php?id='+this.state.id+'&title='+this.state.title+'&body='+this.state.body);
        this.setState({ showEdit: false });
        this.setState({ render: true });
        console.log('edited');
    }
    deletePost(e,id)
    {
        e.preventDefault();
        axios.post('http://localhost/project9/admin/PHP/deletepost.php?id='+id);
        this.setState({ render: true });
    }
    componentDidMount(){
        axios.get('http://localhost/project9/admin/PHP/posts.php')
        .then((res)=>{
          this.setState({posts: res.data});
          console.log(this.state.users);
        })
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.render !== this.state.render) {
            
            axios.get('http://localhost/project9/admin/PHP/posts.php')
            .then((res)=>{
                this.setState({posts: res.data});
                console.log(this.state.posts);
                this.setState({ render: false });
            })
        }
    }

    render(){
        return <>
                        <div className="table-container">
                <div className="row">
                    <div className="col">
                        <h5 className="pb-2 mb-0">Posts Table</h5>
                    </div>
                    <div className="col text-right">
                        <button className="btn btn-default low-height-btn" onClick={this.handleOpenModal}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <Modal show={this.state.showModal} onHide={this.handleCloseModal} animation={false}>
                            <Modal.Header closeButton>
                            <Modal.Title>Add Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" onChange={e=>{this.setState({title: e.target.value})}}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Context</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" onChange={e=>{this.setState({body: e.target.value})}}/>
                                    </Form.Group>

                                    <button className="btn btn-primary" type="submit" onClick={this.addPost}>
                                        Submit
                                    </button>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <button className="btn btn-secondary" onClick={this.handleCloseModal}>
                                Close
                            </button>
                            </Modal.Footer>
                        </Modal>
                    </div>
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
                                <th>Title</th>
                                <th>Context</th>
                                <th>Created On</th>
                                <th>Updated On</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.posts && this.state.posts.map(post =>
                            {return(
                                <>
                                    <tr>
                                    <td>{post.id}</td>
                                    <td>{post.user_id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>{post.created_at}</td>
                                    <td>{post.updated_at}</td>
                                    <td>{post.deleted == 1? 'Deleted':'Active'}</td>
                                    <td></td>
                                    <td>
                                        <div className="dropdown table-action-dropdown">
                                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                                <li><button className="dropdown-item" onClick={(e)=>{this.handleOpenEdit(e,post)}}><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</button></li>
                                                <div className="dropdown-divider"></div>
                                                <li><button className="dropdown-item text-danger" onClick={(e)=>{this.deletePost(e,post.id)}}><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</button></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <Modal show={this.state.showEdit} onHide={this.handleCloseEdit} animation={false}>
                            <Modal.Header closeButton>
                            <Modal.Title>Edit Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" 
                                        value={this.state.title?this.state.title:''}
                                        placeholder="Enter Name" 
                                        onChange={e=>this.addTitle(e)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Context</Form.Label>
                                        <Form.Control type="text"
                                        value={this.state.body?this.state.body:''}
                                        placeholder="Enter email" 
                                        onChange={e=>this.addBody(e)}/>
                                    </Form.Group>

                                    <button className="btn btn-primary" type="submit" onClick={this.editPost}>
                                        Submit
                                    </button>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <button className="btn btn-secondary" onClick={this.handleCloseEdit}>
                                Close
                            </button>
                            </Modal.Footer>
                        </Modal>
                                </>
                            )})}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    }
}

export default adminLayout(PostsPage);