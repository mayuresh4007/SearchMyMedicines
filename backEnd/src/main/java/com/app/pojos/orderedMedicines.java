package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Embeddable
public class orderedMedicines {
	
	@Column(name="medicne_id",nullable=false)
	private Integer medicineId;
	@Column(name="medicine_name",nullable=false)
	private String medicineName;
	
	private Double price;
	
	private Integer quantity;
	
	orderedMedicines(){
		
	}

	

	public orderedMedicines(Integer medicineId, String medicineName, Double price, Integer quantity) {
		super();
		this.medicineId = medicineId;
		this.medicineName = medicineName;
		this.price = price;
		this.quantity = quantity;
	}



	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	
	public Integer getMedicineId() {
		return medicineId;
	}


	public void setMedicineId(Integer medicineId) {
		this.medicineId = medicineId;
	}



	@Override
	public String toString() {
		return "UserOrderMedicines [medicineId=" + medicineId + ", medicineName=" + medicineName + ", price=" + price
				+ ", quantity=" + quantity + "]";
	}


	
	
	
}
