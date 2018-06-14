package com.revature.model;

public class Department
{

	private String department_name;
	private int department_head_ID;
	private int benco_ID;
	
	public Department() {
		super();
	}
	
	public Department(String department_name, int department_head_ID, int benco_ID) {
		super();
		this.department_name = department_name;
		this.department_head_ID = department_head_ID;
		this.benco_ID = benco_ID;
	}

	public String getDepartmentName() {
		return department_name;
	}

	public void setDepartmentName(String department_name) {
		this.department_name = department_name;
	}

	public int getDepartmentHead_ID() {
		return department_head_ID;
	}

	public void setDepartmentHead_ID(int department_head_ID) {
		this.department_head_ID = department_head_ID;
	}

	public int getBenco_ID() {
		return benco_ID;
	}

	public void setBenco_ID(int benco_ID) {
		this.benco_ID = benco_ID;
	}
	
}
