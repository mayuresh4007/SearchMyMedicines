import React from 'react';
import HeaderComponent from './HeaderComponent';


class UserComponent extends React.Component{

   constructor(props){
       super(props)
       this.state={
           employee:[]
       }

       this.login=this.login.bind(this);
       this.signup=this.signup.bind(this);
   }

login(){
    this.props.history.push('/login');
}

signup(){
    this.props.history.push('/signup');
}

    render(){
        return(
            <div>
 <HeaderComponent />

<div className="row" style={{left:'10%',position:'relative', padding:'10px'}}>
    <button  className="btn btn-primary" onClick={this.login}>Login</button>
    
    <button style={{marginLeft:'10px'}} className="btn btn-primary" onClick={this.signup}>SignUp</button>
</div>
            </div>
        )
    }
}

export default UserComponent;