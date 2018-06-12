package com.revature.model;

public class Department
{

	private String department_Name;
	private int department_Head_ID;
	private int benco_ID;
	
	
	
	public Department(String department_Name, int department_Head_ID, int benco_ID) 
	
	{
		super();
		this.department_Name = department_Name;
		this.department_Head_ID = department_Head_ID;
		this.benco_ID = benco_ID;
	}



	public String getDepartment_Name() {
		return department_Name;
	}



	public void setDepartment_Name(String department_Name) {
		this.department_Name = department_Name;
	}



	public int getDepartment_Head_ID() {
		return department_Head_ID;
	}



	public void setDepartment_Head_ID(int department_Head_ID) {
		this.department_Head_ID = department_Head_ID;
	}



	public int getBenco_ID() {
		return benco_ID;
	}



	public void setBenco_ID(int benco_ID) {
		this.benco_ID = benco_ID;
	}



	public Department() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
