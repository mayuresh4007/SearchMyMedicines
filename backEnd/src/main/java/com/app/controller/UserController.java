package com.app.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.time.LocalDate;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DtoMedicine;
import com.app.encryption.AESAlgorithm;
import com.app.pojos.MedicalStore;
import com.app.pojos.Role;
import com.app.pojos.RoleEnum;
import com.app.pojos.User;
import com.app.pojos.UserOrder;
import com.app.service.IUserService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private IUserService iuserservice;
	
	
	@PostMapping("/login")
	public User userlogin(@RequestBody User user,HttpSession session) throws GeneralSecurityException, IOException {
		AESAlgorithm o = new AESAlgorithm();

		System.out.println(user);
//		System.out.println("in controller"+email+" "+password);
		User u=iuserservice.userlogin(user.getEmail(), o.en(user.getPassword()));
//		map.addAttribute("user", u);
		session.setAttribute("validated_user", u);
		System.out.println(session.getAttribute("validated_user"));
		return u;
	}
	
	@PostMapping("/signup")
	public Integer usersignup(@RequestBody User user) throws GeneralSecurityException, IOException {
		AESAlgorithm o = new AESAlgorithm();
		System.out.println(user);
		Role role=new Role(3,RoleEnum.valueOf("USER"),true);
		user.setRole(role);
		user.setPassword( o.en(user.getPassword()));
		boolean status=iuserservice.usersignup(user);
		
			return user.getUserId();
		
	}
	
	@PostMapping("/searchMedicine")
	public List<MedicalStore> searchmedical(@RequestBody DtoMedicine dto)
	{
		List<MedicalStore> l1=iuserservice.getMedicals(dto.getMedicineName(),dto.getPinCode());
		System.out.println(l1);
		return l1;
	}
	
	@PostMapping("/placeOrder")
	public Integer placeOrder(@RequestBody UserOrder userorder)
	{
		LocalDate date=LocalDate.now();
		userorder.setOrderDate(date);
		userorder.setStatus(true);
		System.out.println(userorder);
		
		System.out.println(userorder.getOrderedMedicines());
				
		return iuserservice.placeOrder(userorder);
	}
	
	@PostMapping("/userOrder")
	List<UserOrder> seeOrder(@RequestBody DtoMedicine dto)
	{
		System.out.println(dto.getEmail());
		return iuserservice.seeOrder(dto.getEmail());
	}
}
