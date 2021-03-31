package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="medical_stores")
public class MedicalStore {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "medical_id")
	private Integer medicalId;
	@Column(name="medical_name",nullable = false,length = 20)
	private String medicalName;
	@Column(name="pharmacist_name",nullable = false,length = 20)
	private String pharmacistName;
	@Column(name="land_mark",nullable = false,length = 30)
	private String landMark;
	@Column(nullable=false,length = 30)
	private String area;
	@Column(nullable = false,length = 20)
	private String city;
	@Column(nullable = false,length = 20)
	private String state;
	@Column(nullable = false,length = 20)
	private String country;
	@Column(name="pin_code",nullable = false)
	private Integer pinCode;
	@JsonManagedReference
	@OneToMany(mappedBy = "medicals", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
	private Set<Medicines> medicines=new HashSet<>();
	@OneToOne
	@JoinColumn(name="user_id")
	private User user;
	@Column(nullable=false, unique=true)
	private String email;
	public MedicalStore() {
		
	}

	public MedicalStore(Integer medicalId, String medicalName, String pharmacistName, String landMark, String area,
			String city, String state, String country, Integer pinCode, Set<Medicines> medicines, User user,
			String email) {
		super();
		this.medicalId = medicalId;
		this.medicalName = medicalName;
		this.pharmacistName = pharmacistName;
		this.landMark = landMark;
		this.area = area;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pinCode = pinCode;
		this.medicines = medicines;
		this.user = user;
		this.email = email;
	}

	public Integer getMedicalId() {
		return medicalId;
	}

	public void setMedicalId(Integer medicalId) {
		this.medicalId = medicalId;
	}

	public String getMedicalName() {
		return medicalName;
	}

	public void setMedicalName(String medicalName) {
		this.medicalName = medicalName;
	}

	public String getPharmacistName() {
		return pharmacistName;
	}

	public void setPharmacistName(String pharmacistName) {
		this.pharmacistName = pharmacistName;
	}

	public String getLandMark() {
		return landMark;
	}

	public void setLandMark(String landMark) {
		this.landMark = landMark;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
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

	public Integer getPinCode() {
		return pinCode;
	}

	public void setPinCode(Integer pinCode) {
		this.pinCode = pinCode;
	}

	public Set<Medicines> getMedicines() {
		return medicines;
	}

	public void setMedicines(Set<Medicines> medicines) {
		this.medicines = medicines;
	}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

	@Override
	public String toString() {
		return "MedicalStore [medicalId=" + medicalId + ", medicalName=" + medicalName + ", pharmacistName="
				+ pharmacistName + ", landMark=" + landMark + ", area=" + area + ", city=" + city + ", state=" + state
				+ ", country=" + country + ", pinCode=" + pinCode + ", user=" + user + ", email=" + email + "]";
	}

	public void addMedicine(Medicines m1)
	{
		medicines.add(m1);
		m1.setMedicals(this);
	}
	
	public void sellMedicine(Medicines m1)
	{
		medicines.remove(m1);
		m1.setMedicals(null);
	}

	
}