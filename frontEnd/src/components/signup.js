import React, { Component } from 'react';
import UserService from '../services/UserService';
import HeaderComponent from './HeaderComponent';
import validator from 'validator'

const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

class signup extends Component {

    constructor(props){
        super(props)
        this.state={
             email:'',
             password:'',
             name :'',
             city:'',
             state:'',
             country:'',
             phone:'',
             role:'1',
             pinCode:'',
             userd:'',
             emailError:'',
             passwordError:'',

        }

        this.EmailHandler=this.EmailHandler.bind(this);
        this.PasswordHandler=this.PasswordHandler.bind(this);
        this.NameHandler=this.NameHandler.bind(this);
        this.CityHandler=this.CityHandler.bind(this);
        this.StateHandler=this.StateHandler.bind(this);
        this.CountryHandler=this.CountryHandler.bind(this);
        this.PhoneHandler=this.PhoneHandler.bind(this);
        this.signupProcess=this.signupProcess.bind(this);
        this.pinCodeHandler=this.pinCodeHandler.bind(this);
        this.validateEmail=this.validateEmail.bind(this);
        this.validatePassword=this.validatePassword.bind(this);
    }

        EmailHandler=(Event)=>{
            this.setState({email: Event.target.value})
            this.validateEmail();
        }
    
        PasswordHandler=(Event)=>{
            this.setState({password: Event.target.value})
            this.validatePassword();
        }

        NameHandler=(Event)=>{
            this.setState({name: Event.target.value})
        }

        CityHandler=(Event)=>{
            this.setState({city: Event.target.value})
        }
    
        StateHandler=(Event)=>{
            this.setState({state: Event.target.value})
        }

        CountryHandler=(Event)=>{
            this.setState({country: Event.target.value})
        }

        PhoneHandler=(Event)=>{
            this.setState({phone: Event.target.value})
        }

       pinCodeHandler=(Event)=>{
            this.setState({pinCode: Event.target.value})
        }

        signupProcess=(s)=>{
            s.preventDefault();
    
            let usersignup={email:this.state.email,password:this.state.password,name:this.state.name,city:this.state.city,
            state:this.state.state,country:this.state.country,phone:this.state.phone,pinCode:this.state.pinCode};
            console.log('user=>'+JSON.stringify(usersignup));
            if (this.state.emailError != null && this.state.passwordError === null) {
            UserService.signupuser(usersignup).then(res =>{
                
                this.setState({userd:res.data});
                console.log(this.state.userd);
               sessionStorage.setItem("userData",this.state.userd.name);
                    this.props.history.push('/login');
            });
        }
        else{
            alert("Wrong Email or Password")
        }
        }



        validateEmail(e) {
            console.log(validator.isEmail(this.state.email))

            if (validator.isEmail(this.state.email))  {
                this.setState({ emailError: "valid" });
                console.log(this.state.emailError)
            }
            else {
                this.setState({ emailError: null });
            }
    
        };
        validatePassword(e) {
            console.log(passwordValidator.test(this.state.password))
            if (passwordValidator.test(this.state.password) === false) {
                this.setState({ passwordError: "Invalid" });
            } else {
                this.setState({ passwordError: null });
            }
        }
    

    render() {
        return (
            <div>
                 <HeaderComponent />
            <div className="container">
                <div className ="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3>Sign up Details</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input placeholder="Email" name="email" className="form-control"
                                value={this.state.email} onChange={this.EmailHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="Password(only uppercase,lowercase alphabets and numbers allowed" name="password" className="form-control"
                                value={this.state.password} onChange={this.PasswordHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input placeholder="Name" name="name" className="form-control"
                                value={this.state.name} onChange={this.NameHandler}/>
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input placeholder="City" name="city" className="form-control"
                                value={this.state.city} onChange={this.CityHandler}/>
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <input placeholder="State" name="state" className="form-control"
                                value={this.state.state} onChange={this.StateHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <input placeholder="Country" name="country" className="form-control"
                                value={this.state.country} onChange={this.CountryHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input placeholder="Mobile" name="phone" className="form-control"
                                value={this.state.phone} onChange={this.PhoneHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Pin Code</label>
                                <input placeholder="Pin Code" name="pinCode" className="form-control"
                                value={this.state.pinCode} onChange={this.pinCodeHandler}/>
                            </div>

                            <button className="btn btn-success" onClick={this.signupProcess}>Sign up</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default signup;