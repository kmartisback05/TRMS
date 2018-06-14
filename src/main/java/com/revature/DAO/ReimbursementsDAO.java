package com.revature.DAO;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.revature.model.Employees;
import com.revature.model.Reimbursements;



public interface ReimbursementsDAO 
{
	public abstract void insertReimbursements(Reimbursements reimbursements)throws SQLException;
	
	public abstract List<Reimbursements> getEmployeeReimbursements(int employee_id) throws SQLException;
	
	public abstract List<Reimbursements> getSupervisorReimbursements(int supervisor_id) throws SQLException;
	
	public abstract List<Reimbursements> getDepartmentHeadReimbursements(int deptHead_id) throws SQLException;
	
	public abstract Reimbursements getReimbursementsById(int reimbursement_id) throws SQLException;
	
	public abstract List<Reimbursements> getBencoReimbursements() throws SQLException;
	
	public abstract void deleteReimbursements(Reimbursements reimbursements) throws SQLException;
	
	public abstract void updateReimbursements(Reimbursements reimbursements) throws SQLException;
	
	public abstract void updateApprovalStep(Reimbursements reimbursement) throws SQLException;
	
	public abstract void updateStatus(Reimbursements reimbursement) throws SQLException;
	
	public abstract void updateAmount(Reimbursements reimbursement, double amount) throws SQLException;
	
	public abstract double getAvailableAmount(int employee_id) throws SQLException;
}
