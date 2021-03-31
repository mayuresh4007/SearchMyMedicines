package com.app.dao;

import java.util.List;

import com.app.pojos.MedicalStore;
import com.app.pojos.Medicines;
import com.app.pojos.UserOrder;

public interface IPharmaDao {
	MedicalStore getMedical(String email);
	Medicines findMedicine(String name);
	void savemedicine(Medicines m,MedicalStore medical);
	Medicines getMedicineByName(String name,String email);
	List<UserOrder> seeOrder(String email);
	void sellMedicines(String email,List<Medicines> medicines,Integer orderId);
}
