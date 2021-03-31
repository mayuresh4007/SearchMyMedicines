import React, { Component } from 'react';
import HeaderComponent from '../HeaderComponent';

class successfulOrder extends Component {
    render() {
        return (
            <div>
                 <HeaderComponent />
                <h3>Your order Id Is {sessionStorage.getItem("orderid")}</h3>
                <h4>Thanx for Shopping</h4>
            </div>
        );
    }
}

export default successfulOrder;