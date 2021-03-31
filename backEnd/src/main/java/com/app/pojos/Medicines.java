package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="medicine")
public class Medicines {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "medicine_id")
	private Integer medicineId;
	@Column(name="medicine_name",nullable = false)
	private String medicineName;
	@Column(nullable = false)
	private String company;
	@Column(nullable = false)
	private Double price;
	@Column(name="exp_date")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDate expDate;
	@JsonBackReference
	@ManyToOne()
	@JoinColumn(name = "medical_id",nullable=false)
	private MedicalStore medicals;
	@Column(nullable=false)
	private Integer quantity;
	
	public Medicines() {
		
	}

	public Medicines(Integer medicineId, String medicineName, String company, Double price, LocalDate expDate,
			MedicalStore medicals, Integer quantity) {
		super();
		this.medicineId = medicineId;
		this.medicineName = medicineName;
		this.company = company;
		this.price = price;
		this.expDate = expDate;
		this.medicals = medicals;
		this.quantity = quantity;
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
	
	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Medicines [medicineId=" + medicineId + ", medicineName=" + medicineName + ", company=" + company
				+ ", price=" + price + ", expDate=" + expDate + ", medicals=" + medicals + ", quantity=" + quantity
				+ "]";
	}

	
}
