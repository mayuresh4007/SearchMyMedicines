
import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';

class HomeUserBuy extends Component {

    constructor(props){
        super(props);
        this.state={
        medical:[],
        medicines:[],
        medicine:'',
        chossenMedicines:[],
        reqQuantity:'',
        test:'',
        finalMedicines:[]
        }

        this.MedicineHandler=this.MedicineHandler.bind(this);
        this.searchMedicine=this.searchMedicine.bind(this);
        this.reqQuantityHandler=this.reqQuantityHandler.bind(this);
        this.addMedicine=this.addMedicine.bind(this);
        this.removeMedicine=this.removeMedicine.bind(this);
    }

    placeOrder=()=>
    {
        sessionStorage.setItem("order",JSON.stringify(this.state.finalMedicines))
        this.props.history.push("/userOrder");
    }


    removeMedicine=(Id)=>{
        console.log("hello"+Id)
    this.setState({
        finalMedicines: this.state.finalMedicines.filter(item => item.medicineId !== Id)
    })
    }

    addMedicine=(Id)=>
    {
        if(this.state.reqQuantity > 0){
        var temp=0;
        var final
console.log(Id)
console.log(this.state.reqQuantity)
this.state.medicines.map(
    m=>{
if(m.medicineId ===Id){
if(this.state.reqQuantity<=m.quantity)
{
    temp=1;
final={medicineId:m.medicineId, medicineName:m.medicineName,price:m.price,quantity:this.state.reqQuantity}
this.state.finalMedicines.push(final)
console.log(this.state.finalMedicines)
this.setState({
    chossenMedicines: this.state.chossenMedicines.filter(item => item.medicineId !== Id)
})
console.log(this.state.medicines)
}
}
    }
)
if(temp ===0){
    alert("Dont Have Enough Quantity")
}
        }else{
            alert("Quantity should be more than 0")
        }
    }

    reqQuantityHandler=(Event)=>
    {
        this.setState({reqQuantity:Event.target.value})
    }

    searchMedicine=()=>
    {
        var i=0;
        this.state.medicines.map(
            medi=>
            {
                if(medi.medicineName === this.state.medicine)
                {
                    this.state.chossenMedicines.push(medi)
                   i=1
                }
            }
        )
        if(i==0)
        alert("Medicine Not Found")
        console.log(this.state.chossenMedicines)
        this.setState({test:'testing'})
    }

    MedicineHandler=(Event)=>
    {
        this.setState({medicine:Event.target.value})
    }
    componentDidMount=()=>{
        var temp=JSON.parse(sessionStorage.getItem("choosenMedical"))
        this.state.medical.push(temp)
        console.log(JSON.parse(sessionStorage.getItem("choosenMedical")).medicines)
        
        console.log(this.state.medical)
      sessionStorage.setItem("pharmaEmail",temp.email)
      
        this.state.medical.map(({medicines}, medi)=>
                (
                    
                    medicines.map( m=>
                        {
                            this.state.medicines.push(m)
                    
                        }
                        
                    )
                
            )
            )
            var temp1=(sessionStorage.getItem("choosenMedicine"))
           this.state.medicines.map(m=>
            {
                if(m.medicineName==temp1)
                this.state.chossenMedicines.push(m)
            }
            )
            console.log(this.state.chossenMedicines)
            console.log(this.state.medicines)
            this.setState({test:'testing'})
    }
    render() {
        return (
            <div>
                <HeaderComponent />
                 
                <h3 className='text-center'>You can Search More Medicine from {JSON.parse(sessionStorage.getItem("choosenMedical")).medicalName}</h3>
                                
                <div className="container">
                <div className ="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Search Medicine</label>
                                <input placeholder="Medicine Name" name="medicine" className="form-control"
                                value={this.state.medicine} onChange={this.MedicineHandler}/>                                 
                                </div>                                                        
                            
                        </form>                       
                        <button className="btn btn-success" onClick={this.searchMedicine}>Search</button>
                    </div>
                    </div>
                </div>        

                </div>
<h3 className='text-center'>Searched Medicines</h3>
<div>
                <table className='table table-active'>
<thead>
    <tr>
   
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
    this.state.chossenMedicines.map(
        medi=>     
        
            <tr key ={medi.medicineId}>
              
                    <td>{medi.medicineName}</td>
                    <td>{medi.company}</td>
                    <td>{medi.price}</td>
                    <td>{medi.expDate}</td>
                    <td><form>
                                  <div className="form-group">                                
                                      <input placeholder="Quantity" name="reqQuantity" className="form-control"
                                      value={this.state.reqQuantity} onChange={this.reqQuantityHandler}/>
                                      </div>                                      
                                       </form> </td>
                    <td><button className="btn btn-success" onClick={()=>this.addMedicine(medi.medicineId)}>Add</button></td>
            </tr>

        )
            }
           </tbody>

      </table>

      <h3 className='text-center'>Selected Medicine</h3>
      </div>
<div>
      <table className='table table-secondary'>
<thead>
    <tr>
   
      <td>Medicine Name</td>     
      <td>price</td>     
      <td>Quantity</td>
      <td>total</td>
      <td></td>
    </tr>
</thead>

<tbody>     
    {
    this.state.finalMedicines.map(
        medi=>     
        
            <tr key ={medi.medicineId}>              
                    <td>{medi.medicineName}</td>                    
                    <td>{medi.price}</td>
                    <td>{medi.quantity}</td>  
                    <td>{medi.price*medi.quantity}</td>                  
                    <td><button className="btn btn-danger" onClick={()=>this.removeMedicine(medi.medicineId)}>Remove</button></td>
            </tr>

        )
            }
           </tbody>

      </table>
      <button className="btn btn-success" onClick={()=>this.placeOrder()}>Place Order</button>
      </div>
            </div>
        );
    }
}

export default HomeUserBuy;