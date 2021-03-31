package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.MedicalStore;

public class DtoMedicine {

	private String email;
	
	private String medicineName;
	
	private String company;
	
	private Double price;
	
	private LocalDate expDate;
	
	private MedicalStore medicals;
	
	private Integer quantity;
	
	private Integer pinCode;
	
	public DtoMedicine() {
		
	}	

	public DtoMedicine(String email, String medicineName, String company, Double price, LocalDate expDate,
			MedicalStore medicals, Integer quantity, Integer pinCode) {
		super();
		this.email = email;
		this.medicineName = medicineName;
		this.company = company;
		this.price = price;
		this.expDate = expDate;
		this.medicals = medicals;
		this.quantity = quantity;
		this.pinCode = pinCode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public LocalDate getExpDate() {
		return expDate;
	}

	public void setExpDate(LocalDate expDate) {
		this.expDate = expDate;
	}

	public MedicalStore getMedicals() {
		return medicals;
	}

	public void setMedicals(MedicalStore medicals) {
		this.medicals = medicals;
	}

	public Integer getPinCode() {
		return pinCode;
	}

	public void setPinCode(Integer pinCode) {
		this.pinCode = pinCode;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	
}
