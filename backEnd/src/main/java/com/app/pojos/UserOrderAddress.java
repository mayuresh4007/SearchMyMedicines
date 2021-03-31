package com.app.pojos;

import javax.persistence.Embeddable;

@Embeddable
public class UserOrderAddress {
	
	private String address;
	
	private String city;
	
	private String district;
	
	private String state;
	
	private String country;
	
	private Integer pinCode;
	
	private Long mobile;
	
	UserOrderAddress(){
		
	}

	public UserOrderAddress(String address, String city, String district, String state, String country, Integer pinCode,
			Long mobile) {
		super();
		this.address = address;
		this.city = city;
		this.district = district;
		this.state = state;
		this.country = country;
		this.pinCode = pinCode;
		this.mobile = mobile;
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

	public Integer getPinCode() {
		return pinCode;
	}

	public void setPinCode(Integer pinCode) {
		this.pinCode = pinCode;
	}

	public Long getMobile() {
		return mobile;
	}

	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}

	@Override
	public String toString() {
		return "UserOrderAddress [address=" + address + ", city=" + city + ", district=" + district + ", state=" + state
				+ ", country=" + country + ", pinCode=" + pinCode + ", mobile=" + mobile + "]";
	}
	
	
}
