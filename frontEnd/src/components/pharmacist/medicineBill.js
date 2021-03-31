import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';

class medicineBill extends Component {

    constructor(props){
        super(props);
        this.state={
total:'0',
medicines:[]
        }


    }
    componentDidMount(){
        var t=0
this.state.medicines.push(sessionStorage.getItem("bill"))

this.state.medicines=JSON.parse(sessionStorage.getItem("bill"))
console.log(this.state.medicines);
this.state.medicines.map(
    medi=>{
    console.log(medi.medicineId);  
    this.state.total=medi.medicinePrice * medi.quantity ;  
   t +=medi.medicinePrice * medi.quantity
    
    }
)
console.log(t)
this.setState({total:t})
console.log(this.state.total)
    }
    render() {
        return (
            <div>
                 <HeaderComponent />

                 <h2 className='text-center'>Bill</h2>
                 <table className='table table-strped'>
<thead>
    <tr>
    <th>Id</th>
      <td>Medicine Name</td>
      <td>Company</td>
      <td>price</td>
      <td>Expiry Date</td>
      <td>Quantity</td>
      <td>Total</td>
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
                    <td>{medi.quantity}</td>
                    <td>{medi.medicinePrice*medi.quantity}</td>
                   
            </tr>

        )
        
            }
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>{this.state.total}</td>
           </tbody>

      </table>
            </div>
        );
    }
}

export default medicineBill;