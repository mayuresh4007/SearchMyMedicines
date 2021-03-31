package com.app.service;


import java.util.List;

import com.app.pojos.MedicalStore;
import com.app.pojos.User;
import com.app.pojos.UserOrder;

public interface IUserService {
	User userlogin(String email,String password);
	boolean usersignup(User user);
	void updaterole(User user);
	User getUser(String email);
	List<MedicalStore> getMedicals(String medicineName,Integer pinCode);
	Integer placeOrder(UserOrder userorder);
	UserOrder getOrderId(String UserEmail);
	List<UserOrder> seeOrder(String email);
	
	
}
