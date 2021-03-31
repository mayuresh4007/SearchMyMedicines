import React, { Component } from 'react';
import UserService from '../../services/UserService';
import HeaderComponent from '../HeaderComponent';

class showPharma extends Component {

    constructor(props){
        super(props);
        this.state={
            order:[],
            orders:[],
            testing:'',
        }

        this.deleteMedical=this.deleteMedical.bind(this);
    }

    deleteMedical=(Id)=>{
        let id=({"medicalId":Id})
        UserService.deleteMedical(id).then(res =>{
            console.log(res)
            window.location.reload();

            }
            )
    }

    componentDidMount=()=>
    {
UserService.getMedicals().then(res =>{
    console.log(res.data);
this.state.order.push(res.data);
this.state.order[0].map(
    medi =>{
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
                <div className="card col-md-10 offset-md-1 offset-md-0" style={{marginTop:'20px'}}>
                <table className='table table-info'>
<thead>
    <tr>    
    <td>medical Id</td>
      <td>Medical Name</td>
      <td>Pharmacist Name</td>
      <td>landMark</td>
      <td>Area</td>
      <td>City</td>
      <td></td>
    </tr>
</thead>

<tbody>     
    {
    this.state.orders.map(medi=>     
        
            <tr key ={medi.medicalId}>  
                         <td>{medi.medicalId}</td>        
                    <td>{medi.medicalName}</td>
                    <td>{medi.pharmacistName}</td>
                    <td>{medi.landMark}</td>
                    <td>{medi.area}</td>
                    <td>{medi.city}</td>
                    <td><button className="btn btn-success" onClick={()=>this.deleteMedical(medi.medicalId)}>Delete</button></td>
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

export default showPharma;