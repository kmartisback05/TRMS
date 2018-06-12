package com.revature.model;

import java.util.Date;

public class Reimbursements

{
private int reimbursment_ID;
private int employee_ID;
private String reimbursment_Type_Name;
private double reimbursment_Amount;
private int approval_Step;
private String status;
private String submitted;
private String preapproved;
private Date event_Start_Date;
private Date event_End_Date;
private String location;
private String justification;
private int missed_Work;
private int file_ID;



public Reimbursements(int reimbursment_ID, int employee_ID, String reimbursment_Type_Name, double reimbursment_Amount,
		int approval_Step, String status, String submitted, String preapproved, Date event_Start_Date,
		Date event_End_Date, String location, String justification, int missed_Work, int file_ID) {
	super();
	this.reimbursment_ID = reimbursment_ID;
	this.employee_ID = employee_ID;
	this.reimbursment_Type_Name = reimbursment_Type_Name;
	this.reimbursment_Amount = reimbursment_Amount;
	this.approval_Step = approval_Step;
	this.status = status;
	this.submitted = submitted;
	this.preapproved = preapproved;
	this.event_Start_Date = event_Start_Date;
	this.event_End_Date = event_End_Date;
	this.location = location;
	this.justification = justification;
	this.missed_Work = missed_Work;
	this.file_ID = file_ID;
}

public int getReimbursment_ID() {
	return reimbursment_ID;
}

public void setReimbursment_ID(int reimbursment_ID) {
	this.reimbursment_ID = reimbursment_ID;
}

public int getEmployee_ID() {
	return employee_ID;
}

public void setEmployee_ID(int employee_ID) {
	this.employee_ID = employee_ID;
}

public String getReimbursment_Type_Name() {
	return reimbursment_Type_Name;
}

public void setReimbursment_Type_Name(String reimbursment_Type_Name) {
	this.reimbursment_Type_Name = reimbursment_Type_Name;
}

public double getReimbursment_Amount() {
	return reimbursment_Amount;
}

public void setReimbursment_Amount(double reimbursment_Amount) {
	this.reimbursment_Amount = reimbursment_Amount;
}

public int getApproval_Step() {
	return approval_Step;
}

public void setApproval_Step(int approval_Step) {
	this.approval_Step = approval_Step;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public String getSubmitted() {
	return submitted;
}

public void setSubmitted(String submitted) {
	this.submitted = submitted;
}

public String getPreapproved() {
	return preapproved;
}

public void setPreapproved(String preapproved) {
	this.preapproved = preapproved;
}

public Date getEvent_Start_Date() {
	return event_Start_Date;
}

public void setEvent_Start_Date(Date event_Start_Date) {
	this.event_Start_Date = event_Start_Date;
}

public Date getEvent_End_Date() {
	return event_End_Date;
}

public void setEvent_End_Date(Date event_End_Date) {
	this.event_End_Date = event_End_Date;
}

public String getLocation() {
	return location;
}

public void setLocation(String location) {
	this.location = location;
}

public String getJustification() {
	return justification;
}

public void setJustification(String justification) {
	this.justification = justification;
}

public int getMissed_Work() {
	return missed_Work;
}

public void setMissed_Work(int missed_Work) {
	this.missed_Work = missed_Work;
}

public int getFile_ID() {
	return file_ID;
}

public void setFile_ID(int file_ID) {
	this.file_ID = file_ID;
}


public Reimbursements()
{
	super();
	// TODO Auto-generated constructor stub
}


	
}
