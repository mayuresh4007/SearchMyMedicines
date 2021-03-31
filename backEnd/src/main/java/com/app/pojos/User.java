package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_details")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer userId;
	@Column(length = 20)
	private String name;
	@Column(unique = true, length = 35)
	private String email;
	@Column(length=50, nullable=false)
	private String password;
	@ManyToOne
	@JoinColumn(name="role_id")
	private Role role;
	@Column(length=30)
	private String city;
	@Column(length=30)
	private String state;
	@Column(length=30)
	private String country;
	@Column(name="pin_code",nullable = false)
	private Integer pinCode;
	@Column(length=30,unique=true)
	private Long phone;
	
	public User() {
		
	}


	public User(Integer userId, String name, String email, String password, Role role, String city, String state,
			String country, Integer pinCode, Long phone) {
		super();
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pinCode = pinCode;
		this.phone = phone;
	}


	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
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
	

	public Long getPhone() {
		return phone;
	}


	public void setPhone(Long phone) {
		this.phone = phone;
	}


	public Role getRole() {
		return role;
	}


	public void setRole(Role role) {
		this.role = role;
	}


	public Integer getPinCode() {
		return pinCode;
	}


	public void setPinCode(Integer pinCode) {
		this.pinCode = pinCode;
	}


	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", email=" + email + ", password=" + password + ", role="
				+ role + ", city=" + city + ", state=" + state + ", country=" + country + ", pinCode=" + pinCode
				+ ", phone=" + phone + "]";
	}



	
	
}
