package com.app.dto;

public class DtoMediOrder {

	private Integer medicineId;
	private String medicineName;
	private Double price;
	private Integer reqQuantity;
	
	public DtoMediOrder() {
		
	}

	public DtoMediOrder(Integer medicineId, String medicineName, Double price, Integer reqQuantity) {
		super();
		this.medicineId = medicineId;
		this.medicineName = medicineName;
		this.price = price;
		this.reqQuantity = reqQuantity;
	}

	public Integer getMedicineId() {
		return medicineId;
	}

	public void setMedicineId(Integer medicineId) {
		this.medicineId = medicineId;
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

	public Integer getReqQuantity() {
		return reqQuantity;
	}

	public void setReqQuantity(Integer reqQuantity) {
		this.reqQuantity = reqQuantity;
	}

	@Override
	public String toString() {
		return "DtoMediOrder [medicineId=" + medicineId + ", medicineName=" + medicineName + ", price=" + price
				+ ", reqQuantity=" + reqQuantity + "]";
	}
	
	
}
