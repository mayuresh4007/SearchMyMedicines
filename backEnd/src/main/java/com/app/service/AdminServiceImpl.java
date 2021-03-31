package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IAdminDao;
import com.app.pojos.MedicalStore;
@Service
@Transactional
public class AdminServiceImpl implements IAdminService {
	@Autowired
	IAdminDao iadmindao;
	@Override
	public boolean addMedical(MedicalStore medical) {
		iadmindao.addMedical(medical);
		return false;
	}
	@Override
	public List<MedicalStore> getMedicals() {

		return iadmindao.getMedicals();
	}
	@Override
	public void deleteMedical(Integer id) {
		iadmindao.deleteMedical(id);
		
	}

	
}
