import React, { Component } from 'react';
import UserService from '../../services/UserService';
import HeaderComponent from '../HeaderComponent';

class userOrder extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            order:[],
            address:'',
            city:'',
            district:'',
            state:'',
            country:'',
            pinCode:'',
            mobNumber:'',
            temp:[]
        }

        this.addressHandler=this.addressHandler.bind(this);
        this.cityHandler=this.cityHandler.bind(this);
        this.districtHandler=this.districtHandler.bind(this);
        this.stateHandler=this.stateHandler.bind(this);
        this.countryHandler=this.countryHandler.bind(this);
        this.pincodeHandler=this.pincodeHandler.bind(this);
        this.confirmOrder=this.confirmOrder.bind(this);
        this.mobNumberHandler=this.mobNumberHandler.bind(this);
    }

    confirmOrder=()=>
    {   console.log(sessionStorage.getItem("choosenMedical"))
var placeOrder={address:this.state.address,city:this.state.city,district:this.state.district,
                state:this.state.state,country:this.state.country,pinCode:this.state.pinCode,
                mobile:this.state.mobNumber,orderedMedicines:this.state.order,
                userEmail:sessionStorage.getItem("useremail"),pharmaEmail:sessionStorage.getItem("pharmaEmail"),
            userName:sessionStorage.getItem("username"),medicalName:JSON.parse(sessionStorage.getItem("choosenMedical")).medicalName}
console.log(placeOrder)
                UserService. placeOrder(placeOrder).then(res =>{
                    console.log(res.data);
                    sessionStorage.setItem("orderid",res.data)
                    this.props.history.push("/successfulOrder")
                })
    }

    addressHandler=(Event)=>{
        this.setState({address:Event.target.value})
    }

    cityHandler=(Event)=>{
        this.setState({city:Event.target.value})
    }

    districtHandler=(Event)=>{
        this.setState({district:Event.target.value})
    }

    stateHandler=(Event)=>{
        this.setState({state:Event.target.value})
    }

    countryHandler=(Event)=>{
        this.setState({country:Event.target.value})
    }

    pincodeHandler=(Event)=>{
        this.setState({pinCode:Event.target.value})
    }

    mobNumberHandler=(Event)=>
    {
        this.setState({mobNumber:Event.target.value})
    }

    componentDidMount=()=>
    {
        
        this.state.temp.push(JSON.parse(sessionStorage.getItem("order")))
        console.log(this.state.temp)
        this.state.temp[0].map(
            m=>
            {
                this.state.order.push(m);
            }
        )
        
        console.log(this.state.order)
    }
    render() {
        return (
            <div>
                 <HeaderComponent />

                <div className="container">
                <div className ="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Address</label>
                                <input placeholder="Address" name="address" className="form-control"
                                value={this.state.address} onChange={this.addressHandler}/>                                 
                                </div>       
                                <div className="form-group">
                                <label>City</label>
                                <input placeholder="City" name="city" className="form-control"
                                value={this.state.city} onChange={this.cityHandler}/>                                 
                                </div> 
                                <div className="form-group">
                                <label>District</label>
                                <input placeholder="District" name="district" className="form-control"
                                value={this.state.district} onChange={this.districtHandler}/>                                 
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
                                value={this.state.pinCode} onChange={this.pincodeHandler}/>                                 
                                </div>           
                                <div className="form-group">
                                <label>Mobile Number</label>
                                <input placeholder="Mobile Number" name="mobNumber" className="form-control"
                                value={this.state.mobNumber} onChange={this.mobNumberHandler}/>                                 
                                </div>                                        
                            
                        </form>                       
                        <button className="btn btn-success" onClick={this.confirmOrder}>Confirm Address</button>
                    </div>
                    </div>
                </div>        

                </div>

            </div>
        );
    }
}

export default userOrder;