import React, { Component } from 'react';
import { Route } from 'react-router';
import UserService from '../services/UserService';
import HeaderComponent from './HeaderComponent';


class login extends Component {

    constructor(props){
        super(props)
        this.state={
             email:'',
             password:'',
             userd:'',
             role:''
        }

        this.EmailHandler=this.EmailHandler.bind(this);
        this.PasswordHandler=this.PasswordHandler.bind(this);
        this.loginProcess=this.loginProcess.bind(this);
    }

    loginProcess=(l)=>{
        l.preventDefault();

        let userlogin={email:this.state.email,password:this.state.password};
        console.log('user=>'+JSON.stringify(userlogin));
        UserService.loginuser(userlogin).then(res =>{
            
            this.setState({userd:res.data});
            console.log(this.state.userd);
           sessionStorage.setItem("username",this.state.userd.name);
           sessionStorage.setItem("useremail",this.state.userd.email);
           sessionStorage.setItem("userRole",this.state.userd.role.roleId);
           sessionStorage.setItem("Login",true);

           this.setState({role:this.state.userd.role.roleId});
           console.log(this.state.role);
             if(this.state.role===1){this.props.history.push('/homeadmin');}
                
             if(this.state.role===2){this.props.history.push('/homepharma');}
                
             if(this.state.role===3){this.props.history.push('/homeuser');}
                
        });
    }

    EmailHandler=(Event)=>{
        this.setState({email: Event.target.value})
    }

    PasswordHandler=(Event)=>{
        this.setState({password: Event.target.value})
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                 
                <div className="container">
                    <div className ="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3>Login Details</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input placeholder="Email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.EmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Pasword" name="password" className="form-control"
                                    value={this.state.password} onChange={this.PasswordHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.loginProcess}>Login</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;