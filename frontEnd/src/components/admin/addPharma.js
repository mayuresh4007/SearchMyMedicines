import React, { Component } from 'react';
import UserService from '../../services/UserService';
import HeaderComponent from '../HeaderComponent';

class addPharma extends Component {

    constructor(props){
super(props);
this.state={
    email:'',
    medicalName:'',
    landMark:'',
    area:'',
    city:'',
    state:'',
    country:'',
    pinCode:'',
    pharma:''


}
this.emailHandler=this.emailHandler.bind(this);
this.medicalNameHandler=this.medicalNameHandler.bind(this);
this.landMarkHandler=this.landMarkHandler.bind(this);
this.areaHandler=this.areaHandler.bind(this);
this.cityHandler=this.cityHandler.bind(this);
this.stateHandler=this.stateHandler.bind(this);
this.countryHandler=this.countryHandler.bind(this);
this.pinCodeHandler=this.pinCodeHandler.bind(this);
this.addMedical=this.addMedical.bind(this);
}

emailHandler=(Event)=>{
    this.setState({email: Event.target.value})
}

medicalNameHandler=(Event)=>{
    this.setState({medicalName: Event.target.value})
}

landMarkHandler=(Event)=>{
    this.setState({landMark: Event.target.value})
}

areaHandler=(Event)=>{
    this.setState({area: Event.target.value})
}

cityHandler=(Event)=>{
    this.setState({city: Event.target.value})
}

stateHandler=(Event)=>{
    this.setState({state: Event.target.value})
}

countryHandler=(Event)=>{
    this.setState({country: Event.target.value})
}

pinCodeHandler=(Event)=>{
    this.setState({pinCode: Event.target.value})
}

addMedical=(s)=>{
    s.preventDefault();

    let medical={email:this.state.email,medicalName:this.state.medicalName,landMark:this.state.landMark,
                    area:this.state.area,city:this.state.city,
                    state:this.state.state,country:this.state.country,pinCode:this.state.pinCode};
                    console.log(medical);
    console.log('user=>'+JSON.stringify(medical));
    UserService.addMedical(medical).then(res =>{
        
         this.setState({pharma:res.data});
         console.log(this.state.pharma.medicalName);
        sessionStorage.setItem("addpharma",this.state.pharma.medicalName+" added succesfully");
            this.props.history.push('/HomeAdmin');
    });
}
    render() {
        return (
            <div>
                <HeaderComponent />
                 <div className="container">
                <div className ="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3>Pharmacist Details</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input placeholder="Email" name="email" className="form-control"
                                value={this.state.email} onChange={this.emailHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Medical Name</label>
                                <input placeholder="Medical Name" name="medicalName" className="form-control"
                                value={this.state.medicalName} onChange={this.medicalNameHandler}/>
                            </div>
                            <div className="form-group">
                                <label>LandMark</label>
                                <input placeholder="LandMark" name="landMark" className="form-control"
                                value={this.state.landMark} onChange={this.landMarkHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Area</label>
                                <input placeholder="Area" name="area" className="form-control"
                                value={this.state.area} onChange={this.areaHandler}/>
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input placeholder="City" name="city" className="form-control"
                                value={this.state.city} onChange={this.cityHandler}/>
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <input placeholder="State" name="state" className="form-control"
                                value={this.state.state} onChange={this.stateHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <input placeholder="Country" name="country" className="form-control"
                                value={this.state.country} onChange={this.countryHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Pin Code</label>
                                <input placeholder="Pin Code" name="pinCode" className="form-control"
                                value={this.state.pinCode} onChange={this.pinCodeHandler}/>
                            </div>

                            <button className="btn btn-success" onClick={this.addMedical}>Add Medical</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default addPharma;