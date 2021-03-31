//package com.app.pojos;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToOne;
//import javax.persistence.Table;
//
//@Entity
//@Table(name="user_addr")
//public class Address {
//	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	@Column(name="addr_id")
//	private Integer addressId;
//	@Column(length=30)
//	private String city;
//	@Column(length=30)
//	private String state;
//	@Column(length=30)
//	private String country;
//	@Column(length=30,unique=true)
//	private String phone;
//	//one to one maping between Address-->User
//	@OneToOne
//	@JoinColumn(name="s_id",nullable=false)
//	private User userDetails;
//	
//	public Address()
//	{
//		
//	}
//
//	public Address(String city, String state, String country, String phone) {
//		super();
//		this.city = city;
//		this.state = state;
//		this.country = country;
//		this.phone = phone;
//	}
//
//	public Integer getAddressId() {
//		return addressId;
//	}
//
//	public void setAddressId(Integer addressId) {
//		this.addressId = addressId;
//	}
//
//	public String getCity() {
//		return city;
//	}
//
//	public void setCity(String city) {
//		this.city = city;
//	}
//
//	public String getState() {
//		return state;
//	}
//
//	public void setState(String state) {
//		this.state = state;
//	}
//
//	public String getCountry() {
//		return country;
//	}
//
//	public void setCountry(String country) {
//		this.country = country;
//	}
//
//	public String getPhone() {
//		return phone;
//	}
//
//	public void setPhone(String phone) {
//		this.phone = phone;
//	}
//
//	public User getUserDetails() {
//		return userDetails;
//	}
//
//	public void setUserDetails(User userDetails) {
//		this.userDetails = userDetails;
//	}
//
//	@Override
//	public String toString() {
//		return "Address [addressId=" + addressId + ", city=" + city + ", state=" + state + ", country=" + country
//				+ ", phone=" + phone + "]";
//	}
//	
//	
//
//}
