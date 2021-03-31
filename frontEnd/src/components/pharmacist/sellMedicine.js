import React, { Component } from 'react';
import UserService from '../../services/UserService';
import HeaderComponent from '../HeaderComponent';
import * as ReactBootStrap from "react-bootstrap"; 
 
import 'bootstrap/dist/css/bootstrap.min.css'

class sellMedicine extends Component {

    constructor(props){
        super(props)
        this.state={
            medicine:'',
            medicineId:'',
           medicineName:'',
           medicinePrice:'',
           medicineQuantity:'',
           medicineCompany:'',
           medicineExp:'',
        medicines:[],
        reqQuantity:''
        }
        this.MedicineHandler=this.MedicineHandler.bind(this);
        this.searchMedicine=this.searchMedicine.bind(this);
        this.addMedicineToCart=this.addMedicineToCart.bind(this);
        this.reqQuantityHandler=this.reqQuantityHandler.bind(this);
        this.removeMedicineFromCart=this.removeMedicineFromCart.bind(this);
        this.createMedicineBill=this.createMedicineBill.bind(this);
    }

    MedicineHandler=(Event)=>{
        this.setState({medicine:Event.target.value})
    }
    reqQuantityHandler=(Event)=>{
        this.setState({reqQuantity:Event.target.value})
    }
    searchMedicine=(s)=>{
        s.preventDefault();
        let medicine={medicineName:this.state.medicine,email:sessionStorage.getItem("useremail")};

        UserService.searchMedicine(medicine).then(res =>{
            console.log(res);
                     
            this.setState({medicineName:res.data.medicineName});
            this.setState({medicineId:res.data.medicineId});
            this.setState({medicinePrice:res.data.price});
            this.setState({medicineQuantity:res.data.quantity});
            this.setState({medicineCompany:res.data.company});
            this.setState({medicineExp:res.data.expDate});                     
                       
        });

    }

   addMedicineToCart=()=>{
        if(this.state.reqQuantity <= this.state.medicineQuantity)
        {
            console.log(this.state.reqQuantity)
       console.log("in add medicine Cart")
let selectedMedicine={medicineId:this.state.medicineId,medicineName:this.state.medicineName,medicineCompany:this.state.medicineCompany,
medicinePrice:this.state.medicinePrice,medicineExp:this.state.medicineExp,medicineQuantity:this.state.medicineQuantity,quantity:this.state.reqQuantity};
console.log(selectedMedicine);   

this.state.medicines.push(selectedMedicine)
   // sessionStorage.setItem("medicinecart",this.state.medicines);
    console.log(this.state.medicines)
    this.props.history.push('/sellMedicine');
    this.setState({reqQuantity:''})
}
}

removeMedicineFromCart=(Id)=>{
    console.log("hello"+Id)
this.setState({
    medicines: this.state.medicines.filter(item => item.medicineId !== Id)
})
}

createMedicineBill=()=>{
    sessionStorage.setItem("bill",JSON.stringify(this.state.medicines));
    console.log(sessionStorage.getItem("bill"))
    let sellmedicines={medicines:this.state.medicines,email:sessionStorage.getItem("useremail")};
    UserService.sellmedicines(sellmedicines).then(res =>
        {
            this.props.history.push('/medicineBill');
        })


}
 
    render() {

        return (
            
            <div>
                 <HeaderComponent />
                <div className="container">
                <div className ="row" style={{}}>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className='text-center'>Pharmacist Details</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Search Medicine</label>
                                <input placeholder="Search" name="medicine" className="form-control"
                                value={this.state.medicine} onChange={this.MedicineHandler}/>
                                </div>                                                        
                            <button className="btn btn-success" onClick={this.searchMedicine}>Search</button>
                        </form>                       

                    </div>
                    </div>
                </div>        

                </div>
  
  <h2 className='text-center'>Search Result</h2>

                <div className="card col-md-10 offset-md-1 offset-md-0" style={{marginTop:'20px'}}>
            <table className='table table-strped'>
      <thead>
          <tr>
          <th>Id</th>
            <td>Medicine Name</td>
            <td>Company</td>
            <td>price</td>
            <td>Expiry Date</td>
            <td>Avilable Quantity</td>
            <td>Enter Quantity</td>
            <td></td>
          </tr>
      </thead>
      
      <tbody>            
                  <tr key ={this.state.medicineId}>
                      <td>{this.state.medicineId}</td>
                          <td>{this.state.medicineName}</td>
                          <td>{this.state.medicineCompany}</td>
                          <td>{this.state.medicinePrice}</td>
                          <td>{this.state.medicineExp}</td>
                          <td>{this.state.medicineQuantity}</td>
                          <td><form>
                                  <div className="form-group">                                
                                      <input placeholder="Quantity" name="reqQuantity" className="form-control"
                                      value={this.state.reqQuantity} onChange={this.reqQuantityHandler}/>
                                      </div>                                      
                                       </form> </td>
                          <td><button class="btn btn-success" onClick={this.addMedicineToCart}>Add</button></td>
                  </tr>
                 </tbody>
      
            </table>
         
        </div>
    
   <h2 className='text-center'>Selected Medicine</h2>

  <div className="card col-md-10 offset-md-1 offset-md-0">
      <table className='table table-strped'>
<thead>
    <tr>
    <th>Id</th>
      <td>Medicine Name</td>
      <td>Company</td>
      <td>price</td>
      <td>Expiry Date</td>
      <td>Quantity</td>
      <td></td>
    </tr>
</thead>

<tbody>     
    {
    this.state.medicines.map(
        medi=>     
        
            <tr key ={medi.medicineId}>
                <td>{medi.medicineId}</td>
                    <td>{medi.medicineName}</td>
                    <td>{medi.medicineCompany}</td>
                    <td>{medi.medicinePrice}</td>
                    <td>{medi.medicineExp}</td>
                    <td>{medi.reqQuantity}</td>
                    <td><button class="btn btn-danger" onClick={()=>this.removeMedicineFromCart(medi.medicineId)}>remove</button></td>
            </tr>

        )
            }
           </tbody>
<button class="btn btn-success" onClick={()=>this.createMedicineBill()}>Create Bill</button>
      </table>
   
  </div>
            </div>
           
        );
    
}
}

export default sellMedicine;
