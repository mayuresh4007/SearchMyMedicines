package com.app.service;

import java.util.List;

import com.app.pojos.MedicalStore;

public interface IAdminService {
	boolean addMedical(MedicalStore medical);
	List<MedicalStore> getMedicals();
	void deleteMedical(Integer id);
}
