package com.app.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DtoMedicine;
import com.app.dto.DtoSellMedicines;
import com.app.pojos.MedicalStore;
import com.app.pojos.Medicines;
import com.app.pojos.UserOrder;
import com.app.service.IPharmaService;
@CrossOrigin//(origins="http://localhost:3000")
@RestController
@RequestMapping("/pharma")
public class PharmaController {
	@Autowired
	IPharmaService pharmaService;
	
	@PostMapping("/addmedicine")
	Medicines addMedicine(@RequestBody DtoMedicine dto){
		
		Medicines medicine=new Medicines(null, dto.getMedicineName(), dto.getCompany(),dto.getPrice(), dto.getExpDate(), null, dto.getQuantity());
		System.out.println("medicine "+medicine);
		System.out.println("email "+dto.getEmail());
		MedicalStore medical=pharmaService.getMedical(dto.getEmail());
//	medicine.setMedicals(medical);
//	System.out.println("medicine "+medicine);
		//Medicines m=pharmaService.findMedicine(medicine.getMedicineName());
		//System.out.println(m);
		//	m.setQuantity(m.getQuantity()+medicine.getQuantity());
	
			pharmaService.savemedicine(medicine,medical);
			return medicine;
	
	}
	
@PostMapping("/searchMedicine")
Medicines findMedicine(@RequestBody DtoMedicine dto) {
	//MedicalStore medical=pharmaService.getMedical(dto.getEmail());
	
	
	return pharmaService.getMedicineByName(dto.getMedicineName(),dto.getEmail());
	
}

@PostMapping("/seeorder")
List<UserOrder> seeOrder(@RequestBody DtoMedicine dto)
{
	System.out.println(dto.getEmail());
	System.out.println(pharmaService.seeOrder(dto.getEmail()));
	return pharmaService.seeOrder(dto.getEmail());
}

@PostMapping("/sellmedicines")
void sellmedicines(@RequestBody DtoSellMedicines dto)
{
	System.out.println(dto.getEmail());
	System.out.println(dto.getMedicines());
	System.out.println(dto.getOrderId());
	pharmaService.sellMedicines(dto.getEmail(),dto.getMedicines(),dto.getOrderId());
}
	
}
