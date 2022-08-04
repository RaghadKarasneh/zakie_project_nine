import axios from "axios";
import React from "react";
import adminLayout from "../hoc/adminLayout"

class DashboardPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          data: [],
        }
    }

    componentDidMount(){
      axios.get('http://localhost/project9/admin/PHP/count.php')
      .then((res)=>{
        this.setState({data: res.data});
        console.log(this.state.data);
      })
    }

    render(){
        return <>
            <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-comments"></i>
              </div>
              <div className="mr-5">{this.state.data[1]} Users!</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="/userspage">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-warning o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-list"></i>
              </div>
              <div className="mr-5">{this.state.data[2]} Posts!</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="postspage">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-success o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-shopping-cart"></i>
              </div>
              <div className="mr-5">{this.state.data[0]} Comments!</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="commentspage">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
        </>
    }
}

export default adminLayout(DashboardPage);