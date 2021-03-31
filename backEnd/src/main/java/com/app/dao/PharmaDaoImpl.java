package com.app.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.MedicalStore;
import com.app.pojos.Medicines;
import com.app.pojos.UserOrder;
@Repository
public class PharmaDaoImpl implements IPharmaDao{

	@Autowired
	EntityManager mgr;
	@Override
	public MedicalStore getMedical(String email) {
		String jpql="select m from MedicalStore m where m.email=:em";
		return mgr.createQuery(jpql,MedicalStore.class).setParameter("em", email).getSingleResult();
	}
	@Override
	public Medicines findMedicine(String name) {
		String jpql="select m from Medicines m where m.medicineName=:mname";
		return mgr.createQuery(jpql,Medicines.class).setParameter("mname", name).getSingleResult();
	}
	@Override
	public void savemedicine(Medicines m,MedicalStore medical) {
		try {
			
		
			String jpql1="select m from Medicines m where m.medicineName=:mname and m.medicals=:medical";
		Medicines m1=mgr.createQuery(jpql1,Medicines.class).setParameter("mname", m.getMedicineName()).setParameter("medical",medical
				
				).getSingleResult();
		m1.setQuantity(m.getQuantity()+m1.getQuantity());
		m1.setExpDate(m.getExpDate());
		mgr.persist(m1);
		}catch(Exception e) {
			String jpql="select m from MedicalStore m where m.email=:em";
			MedicalStore medical1= mgr.createQuery(jpql,MedicalStore.class).setParameter("em", medical.getEmail()).getSingleResult();
			medical1.addMedicine(m);
			mgr.persist(medical1);
			
		}
	}
	@Override
	public Medicines getMedicineByName(String name, String email) {
		System.out.println("at end");
		String jpql="select m from MedicalStore m where m.email=:em";
		MedicalStore m1=mgr.createQuery(jpql,MedicalStore.class).setParameter("em", email).getSingleResult();
	String jpql1="select m from Medicines m where m.medicineName=:name and m.medicals=:m1";
	
		return mgr.createQuery(jpql1,Medicines.class).setParameter("name", name).setParameter("m1",m1).getSingleResult();
	}
	@Override
	public List<UserOrder> seeOrder(String email) {
		
		String jpql="select o from UserOrder o where o.pharmaEmail=:email and status=true";
		
		return (List<UserOrder>) mgr.createQuery(jpql,UserOrder.class).setParameter("email", email).getResultList();
	}
	@Override
	public void sellMedicines(String email, List<Medicines> medicines,Integer orderId) {
		if(orderId==null) {
		String jpql="select m from MedicalStore m where m.email=:em";
		MedicalStore m=mgr.createQuery(jpql,MedicalStore.class).setParameter("em",email).getSingleResult();
		System.out.println(m.getMedicines());
		for(Medicines medi:medicines)
		{
			Integer i=medi.getMedicineId();
			for(Medicines m1:m.getMedicines())
			{
				if(m1.getMedicineId()==medi.getMedicineId())
				{
					m1.setQuantity(m1.getQuantity()-medi.getQuantity());
				}
			}
		}
		}
		if(orderId !=null)
		{
			String jpql="select m from MedicalStore m where m.email=:em";
			MedicalStore m=mgr.createQuery(jpql,MedicalStore.class).setParameter("em",email).getSingleResult();
			System.out.println(m.getMedicines());
			for(Medicines medi:medicines)
			{
				Integer i=medi.getMedicineId();
				for(Medicines m1:m.getMedicines())
				{
					if(m1.getMedicineId()==medi.getMedicineId())
					{
						m1.setQuantity(m1.getQuantity()-medi.getQuantity());
					}
				}
			}
			
			String jpql1="select u from UserOrder u where u.orderId=:oId";
			
			UserOrder order=mgr.createQuery(jpql1, UserOrder.class).setParameter("oId",orderId).getSingleResult();
			order.setStatus(false);
		}
	}
	
	
}
