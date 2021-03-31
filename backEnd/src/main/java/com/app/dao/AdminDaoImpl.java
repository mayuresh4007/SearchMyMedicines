package com.app.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.MedicalStore;
@Repository
public class AdminDaoImpl implements IAdminDao {
	@Autowired
	private EntityManager mgr;
	@Override
	public boolean addMedical(MedicalStore medical) {
		boolean status=false;
		mgr.persist(medical);
		status=true;
		return status;
	}
	@Override
	public List<MedicalStore> getMedicals() {
		String jpql="select m from MedicalStore m ";
		return mgr.createQuery(jpql, MedicalStore.class).getResultList();
	}
	@Override
	public void deleteMedical(Integer id) {
		String jpql="select m from MedicalStore m where m.medicalId=:mid";
		MedicalStore m=mgr.createQuery(jpql,MedicalStore.class).setParameter("mid",id).getSingleResult();
		mgr.remove(m);
		
	}

}
