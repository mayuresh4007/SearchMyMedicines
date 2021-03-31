package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="user_order")
public class UserOrder {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_id")
	private Integer orderId;
	
	@ElementCollection(fetch=FetchType.EAGER)
	@CollectionTable(name="order_medicine",joinColumns=@JoinColumn(name="oeder_id"))
	private List<orderedMedicines> orderedMedicines=new ArrayList<orderedMedicines>();
	
	@Column(name="pharma_email")
	private String pharmaEmail;
	@Column(name="user_email")
	private String userEmail;
	
	@Column(name="order_date")
	private LocalDate orderDate;
	
	@Column(name="medical_name")
	private String medicalName;
	
	@Column(name="user_date")
	private String userName;
	
	private String address;
	
	private String city;
	
	private String district;
	
	private String state;
	
	private String country;
	
	private Integer pinCode;
	
	private Long mobile;
	
	private boolean status;
	
	UserOrder(){
		
	}

	public UserOrder(Integer orderId, List<com.app.pojos.orderedMedicines> orderedMedicines, String pharmaEmail,
			String userEmail, LocalDate orderDate, String medicalName, String userName, String address, String city,
			String district, String state, String country, Integer pinCode, Long mobile, boolean status) {
		super();
		this.orderId = orderId;
		this.orderedMedicines = orderedMedicines;
		this.pharmaEmail = pharmaEmail;
		this.userEmail = userEmail;
		this.orderDate = orderDate;
		this.medicalName = medicalName;
		this.userName = userName;
		this.address = address;
		this.city = city;
		this.district = district;
		this.state = state;
		this.country = country;
		this.pinCode = pinCode;
		this.mobile = mobile;
		this.status = status;
	}

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public List<orderedMedicines> getOrderedMedicines() {
		return orderedMedicines;
	}

	public void setOrderedMedicines(List<orderedMedicines> orderedMedicines) {
		this.orderedMedicines = orderedMedicines;
	}

	public String getPharmaEmail() {
		return pharmaEmail;
	}

	public void setPharmaEmail(String pharmaEmail) {
		this.pharmaEmail = pharmaEmail;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
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
	
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	

	public String getMedicalName() {
		return medicalName;
	}

	public void setMedicalName(String medicalName) {
		this.medicalName = medicalName;
	}

	@Override
	public String toString() {
		return "UserOrder [orderId=" + orderId + ", pharmaEmail=" + pharmaEmail + ", userEmail=" + userEmail
				+ ", orderDate=" + orderDate + ", medicalName=" + medicalName + ", userName=" + userName + ", address="
				+ address + ", city=" + city + ", district=" + district + ", state=" + state + ", country=" + country
				+ ", pinCode=" + pinCode + ", mobile=" + mobile + ", status=" + status + "]";
	}
	
	
}
