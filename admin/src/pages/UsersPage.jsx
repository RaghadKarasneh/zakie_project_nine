import React from "react";
import adminLayout from "../hoc/adminLayout";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


class UsersPage extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenEdit = this.handleOpenEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
        this.addId = this.addId.bind(this);
        this.addName = this.addName.bind(this);
        this.editName = this.editName.bind(this);
        this.addEmail = this.addEmail.bind(this);
        this.addCity = this.addCity.bind(this);
        this.addPhone = this.addPhone.bind(this);
        this.addPassword = this.addPassword.bind(this);
        this.addUser = this.addUser.bind(this);
        this.editUser=this.editUser.bind(this);
        this.deleteUser=this.deleteUser.bind(this);
        this.state = 
        {
            users:[],
            editData:null,
            id: '',
            name:'',
            email:'',
            city:'',
            phone:'',
            password:'',
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
        this.setState({ name: data.username});
        this.setState({ email: data.email});
        this.setState({ city: data.city});
        this.setState({ phone: data.phone_number});
        this.setState({ password: data.password});
        this.setState({ id: data.id});
        this.setState({ showEdit: true});
        console.log(this.state.showEdit);
    }
      
    handleCloseEdit (e) {
        e.preventDefault();
        this.setState({ showEdit: false });
        console.log(this.state.showEdit);
    }
    addId(e){
        this.setState({ id: e.target.value });
    }
    addName(e){
        this.setState({ name: e.target.value });
    }
    editName(value){
        this.setState({ name: value });
    }
    addEmail(e){
        this.setState({ email: e.target.value });
    }
    addCity(e){
        this.setState({ city: e.target.value });
    }
    addPhone(e){
        this.setState({ phone: e.target.value });
    }
    addPassword(e){
        this.setState({ password: e.target.value });
    }
    addUser (e) {
        e.preventDefault();
        axios.post('http://localhost/project9/admin/PHP/adduser.php?name='+this.state.name+'&email='+this.state.email+'$password='+this.state.password+'&city='+this.state.city+'&phone='+this.state.phone);
        this.setState({ showModal: false });
        this.setState({ render: true });
    }
    
    editUser(e)
    {
        e.preventDefault();
        axios.post('http://localhost/project9/admin/PHP/edituser.php?id='+this.state.id+'&name='+this.state.name+'&email='+this.state.email+'&city='+this.state.city+'&phone='+this.state.phone);
        this.setState({ showEdit: false });
        this.setState({ render: true });
        console.log('edited',this.state.editData.id,this.state.username,this.state.email,this.state.city,this.state.phone_number);
    }
    deleteUser(e,id)
    {
        e.preventDefault();
        axios.post('http://localhost/project9/admin/PHP/deleteuser.php?id='+id);
        this.setState({ render: true });
    }

    componentDidMount()
    {
        axios.get('http://localhost/project9/admin/PHP/users.php')
        .then((res)=>{
          this.setState({users: res.data});
          console.log(this.state.users);
        })
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.render !== this.state.render ||prevState.editData !== this.state.editData) {
            
            axios.get('http://localhost/project9/admin/PHP/users.php')
            .then((res)=>{
                this.setState({users: res.data});
                console.log(this.state.users);
                this.setState({ render: false });
            })
        }
    }

    render(){
        return <>
                        <div className="table-container">
                <div className="row">
                    <div className="col">
                        <h5 className="pb-2 mb-0">Users Table</h5>
                    </div>
                    <div className="col text-right">
                        <button className="btn btn-default low-height-btn" onClick={this.handleOpenModal}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <Modal show={this.state.showModal} onHide={this.handleCloseModal} animation={false}>
                            <Modal.Header closeButton>
                            <Modal.Title>Add User</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" onChange={this.addName}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" onChange={this.addEmail}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>City </Form.Label>
                                        <Form.Control type="text" placeholder="Enter city" onChange={this.addCity}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Phone Number" onChange={this.addPhone}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={this.addPassword}/>
                                    </Form.Group>

                                    <button className="btn btn-primary" type="submit" onClick={this.addUser}>
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>city</th>
                                <th>Phone Number</th>
                                <th>Created On</th>
                                <th>Updated On</th>
                                <th>status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users && this.state.users.map(user =>
                            {return(
                                <>
                                    <tr>
                                    <td>{user.id}</td>
                                    <input type="hidden" onChange={(e)=>{this.setState({id: e.target.value})}} value={user.id}/>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.city}</td>
                                    <td>{user.phone_number}</td>
                                    <td>{user.created_at}</td>
                                    <td>{user.updated_at}</td>
                                    <td>{user.deleted == 1? 'Deleted':'Active'}</td>
                                    <td></td>
                                    <td>
                                        <div className="dropdown table-action-dropdown">
                                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                                <li><button className="dropdown-item" onClick={(e)=>{this.handleOpenEdit(e,user)}}><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</button></li>
                                                <div className="dropdown-divider"></div>
                                                <li><button className="dropdown-item text-danger" onClick={(e)=>{this.deleteUser(e,user.id)}}><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</button></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
    <Modal show={this.state.showEdit} onHide={this.handleCloseEdit} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="hidden" value={this.state.editData ?this.state.editData.id:''} placeholder="Enter Name" onChange={this.addId}/>
                    <Form.Control type="text"
                    value={this.state.name ?this.state.name:''}
                     placeholder="Enter Name" 
                     onChange={this.addName}
                     />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" 
                    value={this.state.email ?this.state.email:''}
                    placeholder="Enter email" 
                    onChange={this.addEmail}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>City </Form.Label>
                    <Form.Control type="text" 
                    value={this.state.city ?this.state.city:''}
                    placeholder="Enter city" 
                    onChange={this.addCity}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" 
                    value={this.state.phone ?this.state.phone_number:''}
                    placeholder="Enter Phone Number" 
                    onChange={this.addPhone}/>
                </Form.Group>

                <button className="btn btn-primary" type="submit" 
                onClick={this.editUser}>
                    Edit
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
                <nav className="table-bottom-center-pagination" aria-label="Page navigation example ">
                    <ul className="pagination">
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    }
}

export default adminLayout(UsersPage);