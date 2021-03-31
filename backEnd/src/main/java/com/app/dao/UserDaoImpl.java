package com.app.dao;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.MedicalStore;
import com.app.pojos.Medicines;
import com.app.pojos.User;
import com.app.pojos.UserOrder;
@Repository
public class UserDaoImpl implements IUserDao{
	
	@Autowired
	private EntityManager mgr;


	@Override
	public User userLogin(String email, String password) {
		String jpql="select u from User u where u.email=:em and u.password =:pass";
		
		return mgr.createQuery(jpql, User.class).setParameter("em",email).setParameter("pass", password).getSingleResult();
	}

	@Override
	public boolean userSignup(User user) {
		String msg="User registration failed";
		mgr.persist(user);
		msg="User registration successfull "+user.getUserId();
		return true;
	}

	@Override
	public void updateRole(User user) {
		String jpql="select u from User u where u.userId=:uid";
		User u1=mgr.createQuery(jpql,User.class).setParameter("uid",user.getUserId()).getSingleResult();
		u1.setRole(user.getRole());
		mgr.persist(u1);
	}

	@Override
	public User getUser(String email) {
		String jpql="select u from User u where u.email=:em";
		return mgr.createQuery(jpql,User.class).setParameter("em", email).getSingleResult();
	}

	@Override
	public List<MedicalStore> getMedicals(String medicneName, Integer pinCode) {
		
		String jpql="select s from MedicalStore s where s.pinCode=:pin";
		
		return mgr.createQuery(jpql,MedicalStore.class).setParameter("pin",pinCode).getResultList();
	}

	@Override
	public Integer placeOrder(UserOrder userorder) {
		mgr.persist(userorder);
		mgr.flush();
		return userorder.getOrderId();
		
	}

	@Override
	public UserOrder getOrderId(String UserEmail) {
		String jpql="select o from UserOrder o where userEmail=:email and orderDate=:date";
		LocalDate d=LocalDate.now();
		return mgr.createQuery(jpql, UserOrder.class).setParameter("email", UserEmail).setParameter("date", d).getSingleResult();
	}

	@Override
	public List<UserOrder> seeOrder(String email) {
		
		String jpql="select o from UserOrder o where o.userEmail=:email and status=true";
		
		return (List<UserOrder>) mgr.createQuery(jpql,UserOrder.class).setParameter("email", email).getResultList();
	}
	
	
	
}
