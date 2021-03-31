package com.app.dto;

import java.util.List;

import com.app.pojos.Medicines;

public class DtoSellMedicines {

	private String email;
	
	private List<Medicines>  medicines;
	
	private Integer orderId;
	
	public DtoSellMedicines() {
		
	}	

	public DtoSellMedicines(String email, List<Medicines> medicines, Integer orderId) {
		super();
		this.email = email;
		this.medicines = medicines;
		this.orderId = orderId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Medicines> getMedicines() {
		return medicines;
	}

	public void setMedicines(List<Medicines> medicines) {
		this.medicines = medicines;
	}

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	
	
}
