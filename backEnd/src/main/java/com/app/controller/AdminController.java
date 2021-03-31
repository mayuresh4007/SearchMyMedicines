package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.MedicalStore;
import com.app.pojos.Role;
import com.app.pojos.RoleEnum;
import com.app.pojos.User;
import com.app.service.IAdminService;
import com.app.service.IUserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	IAdminService iadminservice;
	@Autowired
	IUserService iuserservice;

	@PostMapping("/addpharma")
	public MedicalStore addMedical(@RequestBody MedicalStore medical)
	{
		System.out.println("medical "+medical);
		User u=iuserservice.getUser(medical.getEmail());
		System.out.println("user "+u);
		medical.setPharmacistName(u.getName());
		medical.setUser(u);
		System.out.println("medical "+medical);
		
		boolean status=iadminservice.addMedical(medical);
		Role role=new Role(2,RoleEnum.valueOf("PHARMACIST"),true);
		u.setRole(role);
		iuserservice.updaterole(u);
		
		
		return medical;
		
	}
	
	
	@GetMapping("getMedicals")
	
	List<MedicalStore> getMedicals()
	{
		return iadminservice.getMedicals();
	}
	
	@PostMapping("deleteMedicals")

void deleteMedical(@RequestBody MedicalStore m)
{
		System.out.println(m.getMedicalId());
		iadminservice.deleteMedical(m.getMedicalId());
}
}
