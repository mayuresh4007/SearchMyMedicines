import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';

class HomeAdmin extends Component {

    constructor(props){
        super(props);
        this.state={

        }
         
        this.addPharma=this.addPharma.bind(this);
      
    }

    showPharma=()=>{
        
        this.props.history.push('/showPharma');
    }

    addPharma=()=>{
        this.props.history.push('/addPharma');
    }
    render() {
        return (
            <div>
                <HeaderComponent />
                 <h1 style={{marginLeft:'10px'}}>Welcome to Admin HomePage {sessionStorage.getItem("username")}</h1>
                {console.log("In HomePage"+sessionStorage.getItem("username"))}
              
                <h2 style={{marginLeft:'10px'}}>{sessionStorage.getItem("addpharma")}</h2>
                <div className="row">
    <button className="btn btn-primary" style={{left:'10%',position:'relative', padding:'10px'}}  onClick={this.addPharma}>Add Medical</button>
    <button className="btn btn-primary" style={{left:'20%',position:'relative', padding:'10px'}}  onClick={this.showPharma}>Show Medicals</button>
    </div>
            </div>
        );
    }
}

export default HomeAdmin;