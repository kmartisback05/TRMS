package com.revature.model;

public class Employees

{

private int employee_ID;
private String fName;
private String lName;
private String userName;
private String password;
private int department_ID;
private int supervisor_ID;
private String address;
private String city;
private String state;
private int zipCode;
private String phoneNumber;
private String email;



public Employees() {
	super();
	// TODO Auto-generated constructor stub
}



public Employees(int employee_ID, String fName, String lName, String userName, String password, int department_ID,
		int supervisor_ID, String address, String city, String state, int zipCode, String phoneNumber, String email) {
	super();
	this.employee_ID = employee_ID;
	this.fName = fName;
	this.lName = lName;
	this.userName = userName;
	this.password = password;
	this.department_ID = department_ID;
	this.supervisor_ID = supervisor_ID;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zipCode = zipCode;
	this.phoneNumber = phoneNumber;
	this.email = email;
}



public int getEmployee_ID() {
	return employee_ID;
}



public void setEmployee_ID(int employee_ID) {
	this.employee_ID = employee_ID;
}



public String getfName() {
	return fName;
}



public void setfName(String fName) {
	this.fName = fName;
}



public String getlName() {
	return lName;
}



public void setlName(String lName) {
	this.lName = lName;
}



public String getUserName() {
	return userName;
}



public void setUserName(String userName) {
	this.userName = userName;
}



public String getPassword() {
	return password;
}



public void setPassword(String password) {
	this.password = password;
}



public int getDepartment_ID() {
	return department_ID;
}



public void setDepartment_ID(int department_ID) {
	this.department_ID = department_ID;
}



public int getSupervisor_ID() {
	return supervisor_ID;
}



public void setSupervisor_ID(int supervisor_ID) {
	this.supervisor_ID = supervisor_ID;
}



public String getAddress() {
	return address;
}



public void setAddress(String address) {
	this.address = address;
}



public String getCity() {
	return city;
}



public void setCity(String city) {
	this.city = city;
}



public String getState() {
	return state;
}



public void setState(String state) {
	this.state = state;
}



public int getZipCode() {
	return zipCode;
}



public void setZipCode(int zipCode) {
	this.zipCode = zipCode;
}



public String getPhoneNumber() {
	return phoneNumber;
}



public void setPhoneNumber(String phoneNumber) {
	this.phoneNumber = phoneNumber;
}



public String getEmail() {
	return email;
}



public void setEmail(String email) {
	this.email = email;
}



}
