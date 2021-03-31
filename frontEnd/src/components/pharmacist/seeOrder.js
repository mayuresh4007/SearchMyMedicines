import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';


class seeOrder extends Component {

    constructor(props){
        super(props);
        this.state={
            orders:[],
            order:[],
            testing:'',
            open:0,
            orderId:''
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
    this.props.history.push("/openOrder")
 
}

    componentDidMount=()=>
    {
        var temp=JSON.parse(sessionStorage.getItem("orders"));
        this.state.order.push(JSON.parse(sessionStorage.getItem("orders")));
      
        console.log(temp);
        console.log(this.state.order)
        temp=this.state.order[0];
        this.state.order[0].map(
            medi =>
            {
                this.state.orders.push(medi)
            }
        )
        
      //  this.state.orders.push(this.state.order[0][0]);
        console.log(this.state.orders)
        console.log(this.state.orders.orderId);
        this.setState({testing:"test"})
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
      <td>User Name</td>      
      <td></td>
    </tr>
</thead>

<tbody>     
    {
    this.state.orders.map(
        medi=>     
        
            <tr key ={medi.orderId}>
              
                    <td>{medi.orderId}</td>
                    <td>{medi.userName}</td>
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

export default seeOrder;