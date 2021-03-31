import React from 'react';

import './App.css';
import UserComponent from './components/UserComponent';
//import HeaderComponent from './components/HeaderComponent';
//import FooterComponent from './components/FooterComponent';
import loginComponent from './components/login';
import HomeUser from './components/user/HomeUser';
import HomePharma from './components/pharmacist/HomePharma';
import HomeAdmin from './components/admin/HomeAdmin';
import addPharma from './components/admin/addPharma';
import showPharma from './components/admin/showPharma';
import addMedicine from './components/pharmacist/addMedicine';
import sellMedicine from './components/pharmacist/sellMedicine';
import signup from './components/signup';
import homeuserBuy from './components/user/HomeUserBuy';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';   //for routing
import medicineBill from './components/pharmacist/medicineBill';
import userOrder from './components/user/userOrder';
import seeOrder from './components/pharmacist/seeOrder';
import openOrder from './components/pharmacist/openOrder';
import homeNavigator from './components/homeNavigator';
import usersPlacedOrders from './components/user/usersPlacedOrders';
import successfulOrder from './components/user/successfulOrder';
import useropenOrder from './components/user/useropenOrder';
import orderBill from './components/pharmacist/orderBill';
import aboutUs from './components/aboutUs';
import contactUs from './components/contactUs';
import medicineImage from './image/img.jpg';
function App() {
  return (
    <div  >
     <div>
      <Router>
          
      
      <div >
        <switch>
          <Route path="/" exact component={UserComponent}></Route>
          <Route path="/login" exact component={loginComponent}></Route>
          <Route path="/homeuser" exact component={HomeUser}></Route>
          <Route path="/signup" exact component={signup}></Route>
          <Route path="/homepharma" exact component={HomePharma}></Route>
          <Route path="/homeadmin" exact component={HomeAdmin}></Route>
          <Route path="/addPharma" exact component={addPharma}></Route>
          <Route path="/addMedicine" exact component={addMedicine}></Route>
          <Route path="/sellMedicine" exact component={sellMedicine}></Route>
          <Route path="/medicineBill" exact component={medicineBill}></Route>
          <Route path="/homeuserBuy" exact component={homeuserBuy}></Route>
          <Route path="/userOrder" exact component={userOrder}></Route>
          <Route path="/seeOrder" exact component={seeOrder}></Route>
          <Route path="/openOrder" exact component={openOrder}></Route>
          <Route path="/homeNavigator" exact component={homeNavigator}></Route>
          <Route path="/usersPlacedOrders" exact component={usersPlacedOrders}></Route>
          <Route path="/successfulOrder" exact component={successfulOrder}></Route>
          <Route path="/showPharma" exact component={showPharma}></Route>
          <Route path="/orderBill" exact component={orderBill}></Route>
          <Route path="/useropenOrder" exact component={useropenOrder}></Route>
          <Route path="/aboutUs" exact component={aboutUs}></Route>
          <Route path="/contactUs" exact component={contactUs}></Route>
        </switch>
      </div>
      {/* <FooterComponent /> */}
      
      </Router>
      </div>
</div>
   
  );
}

export default App;
