package com.revature.model;

public class Employees

{

private int employee_ID;
private String fName;
private String lName;
private String userName;
private String password;
private String department_name;
private int supervisor_ID;
private String address;
private String city;
private String state;
private int zipCode;
private String phoneNumber;
private String email;
private String is_supervisor;
private String is_department_head;
private String is_benco;



public Employees() {
	super();
}

public Employees(int employee_ID, String fName, String lName, String userName, String password, String department_name,
		int supervisor_ID, String address, String city, String state, int zipCode, String phoneNumber, String email,
		String is_supervisor, String is_department_head, String is_benco) {
	super();
	this.employee_ID = employee_ID;
	this.fName = fName;
	this.lName = lName;
	this.userName = userName;
	this.password = password;
	this.department_name = department_name;
	this.supervisor_ID = supervisor_ID;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zipCode = zipCode;
	this.phoneNumber = phoneNumber;
	this.email = email;
	this.is_supervisor = is_supervisor;
	this.is_department_head = is_department_head;
	this.is_benco = is_benco;
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

public String getDepartmentName() {
	return department_name;
}

public void setDepartmentName(String department_name) {
	this.department_name = department_name;
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

public String getIsSupervisor() {
	return is_supervisor;
}

@Override
public String toString() {
	return "Employees [employee_ID=" + employee_ID + ", fName=" + fName + ", lName=" + lName + ", userName=" + userName
			+ ", password=" + password + ", department_name=" + department_name + ", supervisor_ID=" + supervisor_ID
			+ ", address=" + address + ", city=" + city + ", state=" + state + ", zipCode=" + zipCode + ", phoneNumber="
			+ phoneNumber + ", email=" + email + ", is_supervisor=" + is_supervisor + ", is_department_head="
			+ is_department_head + ", is_benco=" + is_benco + "]";
}

public void setIsSupervisor(String is_supervisor) {
	this.is_supervisor = is_supervisor;
}

public String getIsDepartmentHead() {
	return is_department_head;
}

public void setIsDepartmentHead(String is_department_head) {
	this.is_department_head = is_department_head;
}

public String getIsBenco() {
	return is_benco;
}

public void setIsBenco(String is_benco) {
	this.is_benco = is_benco;
}

}
