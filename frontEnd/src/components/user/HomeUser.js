import React, { Component } from 'react';
import UserService from '../../services/UserService';
import HeaderComponent from '../HeaderComponent';

class HomePage extends Component {

    constructor(props){
        super(props);
        this.state={
            medicine:'',
            pinCode:'',
            medicalList:[],
            FinalMedicalList:[],
            FinalMedicineList:[],
            temp:''
        }
        this.MedicineHandler=this.MedicineHandler.bind(this);
        this.pinCodehandler=this.pinCodehandler.bind(this);
        this.searchMedical=this.searchMedical.bind(this);
        this.chooseMedical=this.chooseMedical.bind(this);
    }

    pinCodehandler=(Event)=>{
        this.setState({pinCode:Event.target.value})
    }

    MedicineHandler=(Event)=>{
        this.setState({medicine:Event.target.value})
    }

    searchMedical=(s)=>{
        this.setState({FinalMedicalList:[]})
        s.preventDefault();
        
        let userSearch={email:sessionStorage.getItem("useremail"),medicineName:this.state.medicine,pinCode:this.state.pinCode}
        UserService.searchMedical(userSearch).then(res =>{
            console.log(res);
            this.setState({medicalList:res.data})
            console.log("name"+this.state.medicalList)
            this.state.medicalList.map(({medicines}, medi)=>
                (
                    
                    medicines.map(({medicineName}, m)=>
                        {
                            console.log(m)
                            if(medicineName == this.state.medicine)
                            {
                               
                                console.log("medicine==="+medicineName)
                                console.log()
                                this.state.FinalMedicalList.push(this.state.medicalList[medi]);
                                console.log(this.state.FinalMedicalList)
                            }
                    
                        }
                        
                    )
                
            )
            )
            
            this.props.history.push('/homeuser');
            
        })
        
    }

    chooseMedical=(Id)=>{
        console.log(Id)
        this.state.FinalMedicalList.map(        
                medi =>
                {
                    if(medi.medicalId == Id)
                    {
                        console.log("hello")
                        sessionStorage.setItem("choosenMedical",JSON.stringify(medi))
                        sessionStorage.setItem("choosenMedicine",this.state.medicine)
                    }
                }
        )
        this.props.history.push('/homeuserBuy');
        }
    render() {
        return (
            <div>
                <HeaderComponent />
                <h1 className='text-center'>Welcome to User HomePage {sessionStorage.getItem("username")}</h1>
               
                {/* <h2 className='text-center'>{sessionStorage.getItem("username")}</h2> */}
                
                <div className="container" style={{left:'0%',position:'relative', padding:'10px'}}> 
                <div className ="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    
                    <div className="card-body" >
                        <form>
                            <div className="form-group">
                                <label>Search Medicine</label>
                                <input placeholder="Medicine Name" name="medicine" className="form-control"
                                value={this.state.medicine} onChange={this.MedicineHandler}/>
                                 <label>Enter Pin-Code</label>
                                <input placeholder="pincode" name="pinCode" className="form-control"
                                value={this.state.pinCode} onChange={this.pinCodehandler}/>
                                </div>                                                        
                            <button className="btn btn-success" onClick={this.searchMedical}>Search</button>
                        </form>                       

                    </div>
                    </div>
                </div>        

                </div>

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
    this.state.FinalMedicalList.map(medi=>     
        
            <tr key ={medi.medicalId}>  
                         <td>{medi.medicalId}</td>        
                    <td>{medi.medicalName}</td>
                    <td>{medi.pharmacistName}</td>
                    <td>{medi.landMark}</td>
                    <td>{medi.area}</td>
                    <td>{medi.city}</td>
                    <td><button className="btn btn-success" onClick={()=>this.chooseMedical(medi.medicalId)}>choose</button></td>
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
 
export default HomePage;