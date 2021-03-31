import React, { Component } from 'react';
import UserService from '../../services/UserService';
import HeaderComponent from '../HeaderComponent';

class usersPlacedOrders extends Component {

    constructor(props){
        super(props);
        this.state={
orders:[],
order:[],
testing:'',
        }
        this.openOrder=this.openOrder.bind(this);
    }

    openOrder=(Id)=>
{
    console.log(Id)
    console.log(this.state.orders)
    this.state.orders.map(
        m=>{
            console.log(m.orderId)
            if(m.orderId===Id)
            {
                console.log(m)
                sessionStorage.setItem("openOrder",JSON.stringify(m))
                
            }
        }
    )
    console.log(sessionStorage.getItem("openOrder"))
    this.props.history.push("/useropenOrder")
 
}

    componentDidMount=()=>
    {
        
        let email=sessionStorage.getItem("useremail");
        let em={email:email}
UserService.getUserPlacedOrders(em).then(res =>{
console.log(res)
this.state.order.push(res.data)
console.log(this.state.order)
this.state.order[0].map(
    medi=>
    {
        this.state.orders.push(medi)
    }
)
console.log(this.state.orders)
this.setState({"testing":"test"})
})

    }
    render() {
        return (
            <div>
                   <HeaderComponent />
                 <h2 className='text-center'>Orders</h2>
                 <div className="card col-md-5 offset-md-1 offset-md-3" style={{marginTop:'40px'}}>
                <table className='table table-hover'>
<thead>
    <tr class="table-secondary">
    
      <td>Order Id</td>
      <td>Medical Name</td>      
      <td></td>
    </tr>
</thead>

<tbody>     
    {
    this.state.orders.map(
        medi=>     
        
            <tr key ={medi.orderId}>
              
                    <td>{medi.orderId}</td>
                    <td>{medi.medicalName}</td>
                    <td> <button className="btn btn-primary" onClick={()=>this.openOrder(medi.orderId)}>Open</button></td>
                                     
            </tr>

        )
            }
           </tbody>

      </table>
     
      </div>
            </div>
        );
    }
}

export default usersPlacedOrders;