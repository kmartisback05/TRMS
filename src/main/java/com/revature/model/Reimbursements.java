package com.revature.model;

import java.sql.Date;

public class Reimbursements

{
private int reimbursment_ID;
private int employee_ID;
private String reimbursment_type_name;
private double reimbursment_ammount;
private String approval_step;
private String status;
private String grade_submitted;
private String preapproved;
private Date event_start_date;
private Date event_end_date;
private String location;
private String justification;
private String description;
private int missed_Work;


public Reimbursements() {
	super();
}

public Reimbursements(int reimbursment_ID, int employee_ID, String reimbursment_type_name, double reimbursment_ammount,
		String approval_step, String status, String grade_submitted, String preapproved, Date event_start_date,
		Date event_end_date, String location, String justification, String description, int missed_Work) {
	super();
	this.reimbursment_ID = reimbursment_ID;
	this.employee_ID = employee_ID;
	this.reimbursment_type_name = reimbursment_type_name;
	this.reimbursment_ammount = reimbursment_ammount;
	this.approval_step = approval_step;
	this.status = status;
	this.grade_submitted = grade_submitted;
	this.preapproved = preapproved;
	this.event_start_date = event_start_date;
	this.event_end_date = event_end_date;
	this.location = location;
	this.justification = justification;
	this.description = description;
	this.missed_Work = missed_Work;
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


public String getReimbursmentTypeName() {
	return reimbursment_type_name;
}


public void setReimbursmentTypeName(String reimbursment_type_name) {
	this.reimbursment_type_name = reimbursment_type_name;
}


public double getReimbursmentAmmount() {
	return reimbursment_ammount;
}


public void setReimbursmentAmmount(double reimbursment_ammount) {
	this.reimbursment_ammount = reimbursment_ammount;
}


public String getApprovalStep() {
	return approval_step;
}


public void setApprovalStep(String approval_step) {
	this.approval_step = approval_step;
}


public String getStatus() {
	return status;
}


public void setStatus(String status) {
	this.status = status;
}


public String getGradeSubmitted() {
	return grade_submitted;
}


public void setGradeSubmitted(String grade_submitted) {
	this.grade_submitted = grade_submitted;
}


public String getPreapproved() {
	return preapproved;
}


public void setPreapproved(String preapproved) {
	this.preapproved = preapproved;
}


public Date getEventStartDate() {
	return event_start_date;
}


public void setEventStartDate(Date event_start_date) {
	this.event_start_date = event_start_date;
}


public Date getEventEndDate() {
	return event_end_date;
}


public void setEventEndDate(Date event_end_date) {
	this.event_end_date = event_end_date;
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

public String getDescription() {
	return description;
}

public void setDescription(String description) {
	this.description = description;
}


public int getMissedWork() {
	return missed_Work;
}


public void setMissedWork(int missed_Work) {
	this.missed_Work = missed_Work;
}

@Override
public String toString() {
	return "Reimbursements [reimbursment_ID=" + reimbursment_ID + ", employee_ID=" + employee_ID
			+ ", reimbursment_type_name=" + reimbursment_type_name + ", reimbursment_ammount=" + reimbursment_ammount
			+ ", approval_step=" + approval_step + ", status=" + status + ", grade_submitted=" + grade_submitted
			+ ", preapproved=" + preapproved + ", event_start_date=" + event_start_date + ", event_end_date="
			+ event_end_date + ", location=" + location + ", justification=" + justification + ", description="
			+ description + ", missed_Work=" + missed_Work + "]";
}


	
}
