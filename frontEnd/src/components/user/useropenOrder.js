import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';
import UserService from '../../services/UserService';

class useropenOrder extends Component {

    constructor(props){
        super(props);
        this.state={
            orders:[],
            medicines:[],
            testing:'',
            address:'',
            userNmae:'',
            mobile:'',
            total:'',
         
        }
    }

    componentDidMount=()=>
    {
        let tot=0;
        console.log(JSON.parse(sessionStorage.getItem("openOrder")))
        this.state.orders.push(JSON.parse(sessionStorage.getItem("openOrder")))
       // this.state.medicines.push(this.state.orders[0].orderedMedicines)

        this.state.orders.map(
            ({orderedMedicines,userName, address,city,district,state,country,pinCode,mobile })=>
            {
                this.setState({userName:userName})
                this.setState({address:address+", "+city+", "+district+", "+state+", "+country+", "+pinCode})
                this.setState({mobile:mobile})
                console.log(address)
                orderedMedicines.map(
                    m =>{
                        this.state.medicines.push(m)
                        tot+=m.price*m.quantity
                    }
                )
               
            }
        )
        console.log(this.state.orders)
        console.log(this.state.medicines)
        //this.setState({testing:'test'})
        //this.setState({address:this.state.orders[0].address})
        console.log(this.state.address)
        this.setState({total:tot})
    }

    // SellMedicines=()=>{
    //     let sellmedicines={medicines:this.state.medicines,email:sessionStorage.getItem("useremail"),
    //     orderId:this.state.orders[0].orderId};
    //     UserService.sellmedicines(sellmedicines).then(res =>
    //         {
    //           this.props.history.push("/orderBill")
    //         })
    // }


    render() {
       
        return (
            <div>
                 <HeaderComponent />
              
                 <div className="card col-md-10 offset-md-1 offset-md-0" class="center" style={{margin:'40px'}}>
                 <table className='table table-strped-bordered' >
<thead>
    <tr class="table-success">
   
      <td>Medicine Id</td>
      <td>Medicine Name</td>  
      <td>price</td>    
      <td>Quantity</td>
      <td>Total</td>
    </tr>
</thead>

<tbody>     
    {
    this.state.medicines.map(
        medi=>     
        
            <tr key ={medi.medicineId}>
              
                    <td>{medi.medicineId}</td>
                    <td>{medi.medicineName}</td>
                    <td>{medi.price}</td>
                    <td>{medi.quantity}</td>
                    <td>{medi.price * medi.quantity}</td>
                                     
            </tr>

        )
            }
            <tr><td></td><td></td><td></td><td></td><td>{this.state.total}</td></tr>
           </tbody>

      </table>
      </div>

  {/* <button className="btn btn-success" style={{marginLeft:'40px'}} onClick={()=>this.SellMedicines()}>Sell</button> */}
      
      <div className="card col-md-4 offset-md-1 offset-md-0" style={{marginTop:'40px'}}>
      <h4>Name: {this.state.userName}</h4>
      <p>Address:</p>
      <p>{this.state.address}</p>
      <p>Mobile No: {this.state.mobile}</p>
                 </div>
                 
                 </div>
        );
    }
}

export default useropenOrder;