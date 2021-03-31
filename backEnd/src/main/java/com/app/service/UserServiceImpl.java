package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IUserDao;
import com.app.pojos.MedicalStore;
import com.app.pojos.User;
import com.app.pojos.UserOrder;
@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private IUserDao userdao;
	@Override
	public User userlogin(String email, String password) {
		return userdao.userLogin(email, password);
		
	}
	@Override
	public boolean usersignup(User user) {
		
		return userdao.userSignup(user);
	}
	@Override
	public void updaterole(User user) {
		userdao.updateRole(user);
		
	}
	@Override
	public User getUser(String email) {
		return userdao.getUser(email);
	}
	@Override
	public List<MedicalStore> getMedicals(String medicineName,Integer pinCode) {
		
		return userdao.getMedicals(medicineName,pinCode);
	}
	@Override
	public Integer placeOrder(UserOrder userorder) {
		
		return userdao.placeOrder(userorder);
	}
	@Override
	public UserOrder getOrderId(String UserEmail) {
		
		return userdao.getOrderId(UserEmail);
	}
	
	
	@Override
	public List<UserOrder> seeOrder(String email) {
		
		return userdao.seeOrder(email);
	}
	
	

}
