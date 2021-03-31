import React, { Component } from 'react';
import UserService from '../../services/UserService';
import HeaderComponent from '../HeaderComponent';
import medicineImage from '../../image/img.jpg';

class HomePharma extends Component {

    constructor(props){
        super(props);
        this.state={
            medicines:[],
           email:[],
           orders:[]
        }
        this.addMedicine=this.addMedicine.bind(this);
        this.sellMedicine=this.sellMedicine.bind(this);
        this.seeOrder=this.seeOrder.bind(this);
    }
    addMedicine(){
        this.props.history.push('/addMedicine');
    }
    sellMedicine(){
        
        sessionStorage.setItem("medicinecart",this.state.medicines);
        this.props.history.push('/sellMedicine');
    }
    seeOrder(){
        let email={email:sessionStorage.getItem("useremail")};
        console.log(email)
        
        UserService.seeOrder(email).then(res =>{
            console.log(res);
            var temp=res.data;
            this.state.orders.push(temp)
            sessionStorage.setItem("orders",JSON.stringify(temp))
        this.props.history.push("/seeOrder");
        })
    }
   
    render() {
        return (
            <div>
                
                <HeaderComponent />
                 <h1 style={{left:'10%',position:'relative', padding:'10px'}}>Welcome to Pharmacist HomePage {sessionStorage.getItem("username")}</h1>
                {console.log("In HomePage"+sessionStorage.getItem("username"))}
                <div style={{left:'10%',position:'relative', padding:'10px'}}>
                <button className="btn btn-primary" onClick={this.addMedicine}>Add medicine</button>
                <button style={{marginLeft:'10px'}} className="btn btn-primary" onClick={this.sellMedicine}>Sell medicine</button>
                <button style={{marginLeft:'10px'}} className="btn btn-primary" onClick={this.seeOrder}>See Order</button>
                {/* <button style={{marginLeft:'10px'}} className="btn btn-primary" onClick={this.seeOrder}>All Medicine</button> */}
                </div>
                
            </div>
        );
    }
}

export default HomePharma;