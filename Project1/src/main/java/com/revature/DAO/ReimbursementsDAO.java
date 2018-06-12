package com.revature.DAO;

import java.sql.SQLException;
import java.util.ArrayList;

import com.revature.model.Reimbursements;



public interface ReimbursementsDAO 
{
	public abstract void insertReimbursements(Reimbursements reimbursements)throws SQLException;
	
	public abstract ArrayList<Reimbursements> getReimbursementsList() throws SQLException;
	
	public abstract void deleteReimbursements(Reimbursements reimbursements) throws SQLException;
	
	public abstract void updateReimbursements(Reimbursements reimbursements) throws SQLException;
	
	
	
}
