package com.revature.DAOimpl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.revature.DAO.ReimbursementTypeDAO;
import com.revature.model.ReimbursementType;
import com.revature.util.ConnFactory;

public class ReimbursementTypeDAOimpl implements ReimbursementTypeDAO 
{
	private String arr [];

	public ReimbursementTypeDAOimpl(String arr []) {
		this.arr = arr;
	}
	public static ConnFactory cf = ConnFactory.getInstance();

	public ReimbursementType getReimbursementType(String typeName) throws SQLException {
		ReimbursementType rt = null;
		PreparedStatement ps = null;
		Connection conn = null;
		String[] primaryKeys = new String[1];
		primaryKeys[0] = "REIMBURSMENT_TYPE_NAME";
		String sql = "SELECT * FROM REIMBURSMENT_TYPE WHERE REIMBURSMENT_TYPE_NAME = ?";
		
		
		try {
			conn = cf.getConnection(arr);
			ps = conn.prepareStatement(sql, primaryKeys);
			ps.setString(1, typeName);
			ResultSet rs = ps.executeQuery();
			rt = new ReimbursementType(rs.getString("REIMBURSMENT_TYPE_NAME"), rs.getDouble("TYPE_PERCENTAGE"), 
					rs.getInt("GRADING_FORMAT"));
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(ps != null) {
				ps.close();
			}
			if(conn != null) {
				conn.close();
			}
		}
		
		return rt;
	}
	

	
}
