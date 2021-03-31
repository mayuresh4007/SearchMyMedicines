import React, { Component } from 'react';
import UserService from '../../services/UserService';
import HeaderComponent from '../HeaderComponent';

class addMedicine extends Component {
    constructor(props){
        super(props);
        this.state={
            medicineName:'',
            company:'',
            price:'',
            expDate :'',
            quantity:''
        }

    this.medicineNameHandler=this.medicineNameHandler.bind(this);
    this.companyHandler=this.companyHandler.bind(this);
    this.priceHandler=this.priceHandler.bind(this);
    this.expDateHandler=this.expDateHandler.bind(this);
    this.quantityHandler=this.quantityHandler.bind(this);
    }

    medicineNameHandler=(Event)=>{
        this.setState({medicineName: Event.target.value})
    }
    
    companyHandler=(Event)=>{
        this.setState({company: Event.target.value})
    }
    
    priceHandler=(Event)=>{
        this.setState({price: Event.target.value})
    }
    
    expDateHandler=(Event)=>{
        this.setState({expDate: Event.target.value})
    }
    
    quantityHandler=(Event)=>{
        this.setState({quantity: Event.target.value})
    }

    addMedicine=(s)=>{
        s.preventDefault();
    
        let medicine={medicineName:this.state.medicineName,company:this.state.company,price:this.state.price,
            expDate:this.state.expDate,quantity:this.state.quantity,email:sessionStorage.getItem("useremail")};
                        console.log(medicine);
       // console.log('user=>'+JSON.stringify(medicine));
        UserService.addMedicine(medicine).then(res =>{
            console.log(res.data);
            //  this.setState({pharma:res.data});
            //  console.log(this.state.pharma.medicalName);
            // sessionStorage.setItem("addpharma",this.state.pharma.medicalName+" added succesfully");
                 this.props.history.push('/HomePharma');
        });
    }
    render() {
        return (
           
            <div>
                 <HeaderComponent />
                <div className="container" style={{margin:'15px'}}>
                <div style={{left:'5%',position:'relative', padding:'10px'}}>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3>Pharmacist Details</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>MedicineName</label>
                                <input placeholder="Medicine Name" name="medicineName" className="form-control"
                                value={this.state.medicineName} onChange={this.medicineNameHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Company</label>
                                <input placeholder="Company" name="company" className="form-control"
                                value={this.state.company} onChange={this.companyHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Price per Tablet</label>
                                <input placeholder="Price" name="price" className="form-control"
                                value={this.state.price} onChange={this.priceHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Expiry Date</label>
                                <input type="date" placeholder="Expiry Date" name="expDate" className="form-control"
                                value={this.state.expDate} onChange={this.expDateHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Quantity</label>
                                <input placeholder="Quantity" name="quantity" className="form-control"
                                value={this.state.quantity} onChange={this.quantityHandler}/>
                            </div>
                            <button className="btn btn-success" onClick={this.addMedicine}>Add Medicines</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default addMedicine;