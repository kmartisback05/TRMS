package com.revature.DAO;

import java.sql.SQLException;
import java.util.ArrayList;

import com.revature.model.ReimbursementType;


public interface ReimbursementTypeDAO {
	public abstract ReimbursementType getReimbursementType(String typeName) throws SQLException;
}
