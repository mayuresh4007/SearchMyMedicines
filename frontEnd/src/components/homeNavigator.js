import React, { Component } from 'react';

class homeNavigator extends Component {

    constructor(props){
        super(props)
        this.state={

        }
        
    }


    componentDidMount=()=>
    {console.log("hii")
        let role=sessionStorage.getItem("userRole")
        
        console.log("hii")
        if(role){
    if(role == 1)
    this.props.history.push("/homeadmin")
    if(role == 2)
    this.props.history.push("/homepharma")
    if(role == 3)
    this.props.history.push("/homeuser")
        }
        else
    this.props.history.push("/")
    }

    
    render() {
        return (
            <div>
              
            </div>
        );
    }
}

export default homeNavigator;