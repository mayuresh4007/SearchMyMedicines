package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IPharmaDao;
import com.app.pojos.MedicalStore;
import com.app.pojos.Medicines;
import com.app.pojos.UserOrder;
@Service
@Transactional
public class PharmaServiceImpl implements IPharmaService {

	@Autowired
	IPharmaDao pharmadao;
	
	@Override
	public MedicalStore getMedical(String email) {
		return pharmadao.getMedical(email);
	}

	@Override
	public Medicines findMedicine(String name) {

		return pharmadao.findMedicine(name);
	}

	@Override
	public void savemedicine(Medicines m,MedicalStore medical) {
		pharmadao.savemedicine(m,medical);
		
	}

	@Override
	public Medicines getMedicineByName(String name, String email) {
		
		return pharmadao.getMedicineByName(name,email);
	}

	@Override
	public List<UserOrder> seeOrder(String email) {
		
		return pharmadao.seeOrder(email);
	}

	@Override
	public void sellMedicines(String email,List<Medicines> medicines,Integer orderId) {
		pharmadao.sellMedicines(email,medicines,orderId);
		
	}
	
	

}
