package com.app.dao;

import java.util.List;

import com.app.pojos.MedicalStore;
import com.app.pojos.User;
import com.app.pojos.UserOrder;

public interface IUserDao {

	User userLogin(String Email,String password);
	boolean userSignup(User user);
	void updateRole(User user);
	User getUser(String email);
	List<MedicalStore> getMedicals(String medicneName,Integer pinCode);
	Integer placeOrder(UserOrder userorder);
	UserOrder getOrderId(String UserEmail);
	List<UserOrder> seeOrder(String email);
}
