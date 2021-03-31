package com.app.dto;

import java.util.List;

public class DtoOrder {
	private String address;
	private String city;
	private String district;
	private String state;
	private String country;
	private String userEmail;
	private String pharmaEmail;
	private Integer pinCode;
	private Long mobNumber;
	private List<DtoMediOrder> orderedMedicines;
	
	DtoOrder(){
		
	}

	public DtoOrder(String address, String city, String district, String state, String country, String userEmail,
			String pharmaEmail, Integer pinCode, Long mobNumber, List<DtoMediOrder> orderedMedicines) {
		super();
		this.address = address;
		this.city = city;
		this.district = district;
		this.state = state;
		this.country = country;
		this.userEmail = userEmail;
		this.pharmaEmail = pharmaEmail;
		this.pinCode = pinCode;
		this.mobNumber = mobNumber;
		this.orderedMedicines = orderedMedicines;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getPharmaEmail() {
		return pharmaEmail;
	}

	public void setPharmaEmail(String pharmaEmail) {
		this.pharmaEmail = pharmaEmail;
	}

	public List<DtoMediOrder> getOrderedMedicines() {
		return orderedMedicines;
	}



	public void setOrderedMedicines(List<DtoMediOrder> orderedMedicines) {
		this.orderedMedicines = orderedMedicines;
	}



	public Integer getPinCode() {
		return pinCode;
	}

	public void setPinCode(Integer pinCode) {
		this.pinCode = pinCode;
	}
	
	public Long getMobNumber() {
		return mobNumber;
	}

	public void setMobNumber(Long mobNumber) {
		this.mobNumber = mobNumber;
	}

	@Override
	public String toString() {
		return "DtoOrder [address=" + address + ", city=" + city + ", district=" + district + ", state=" + state
				+ ", country=" + country + ", userEmail=" + userEmail + ", pharmaEmail=" + pharmaEmail + ", pinCode="
				+ pinCode + ", mobNumber=" + mobNumber + "]";
	}

	

	


	
	
}
