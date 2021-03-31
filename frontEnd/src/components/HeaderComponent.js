import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)
        this.state={
test:'',
role:false,
log:false
        }
    this.logout=this.logout.bind(this);
    }

logout=()=>{
    sessionStorage.clear();
    this.props.history.push("/")
}
    componentDidMount=()=>
    {
        let order;
        let l=sessionStorage.getItem("Login")
        let r=sessionStorage.getItem("userRole");
       if(r == 3)
       this.setState({"role":true})
        console.log(l)
        console.log(r)
if(l)
this.setState({"log":true})
console.log(this.state.log)


    }

    render() {
        
     
        return (
            <div>
                <header >
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div><a href="http://localhost:3000/" className="navbar-brand">SearchMyMedicine</a></div>
                        <div style={{left:'10%',position:'relative'}}><a href="http://localhost:3000/homeNavigator" className="navbar-brand">Home</a></div>
                        <div style={{left:'10%',position:'relative'}}><a href="http://localhost:3000/aboutUs" className="navbar-brand">About Us</a></div>
                        <div style={{left:'10%',position:'relative'}}><a href="http://localhost:3000/contactUs" className="navbar-brand">Contact Us</a></div>
                        {(this.state.role)?<div style={{left:'40%',position:'relative'}}><a href="http://localhost:3000/usersPlacedOrders" className="navbar-brand">Your Orders</a></div>:null}
                        {(this.state.log)?<div style={{left:'45%',position:'relative'}}><a href="/" onClick={this.logout} className="navbar-brand">Logout</a></div>:null}
                  
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;