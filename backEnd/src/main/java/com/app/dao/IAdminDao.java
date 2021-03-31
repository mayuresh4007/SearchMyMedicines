package com.app.dao;

import java.util.List;

import com.app.pojos.MedicalStore;

public interface IAdminDao {

	boolean addMedical(MedicalStore medical);
	List<MedicalStore> getMedicals();
	void deleteMedical(Integer id);
}
