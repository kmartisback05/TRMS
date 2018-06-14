package com.revature.model;

public class ReimbursementType 

{
	private String reimbursement_type_name;
	private Double type_percentage;
	private int  grading_format;
	
	public ReimbursementType() {
		super();
	}
	
	public ReimbursementType(String reimbursement_type_name, Double type_percentage, int grading_format) {
		super();
		this.reimbursement_type_name = reimbursement_type_name;
		this.type_percentage = type_percentage;
		this.grading_format = grading_format;
	}



	public String getReimbursementTypeName() {
		return reimbursement_type_name;
	}



	public void setReimbursementTypeName(String reimbursement_type_name) {
		this.reimbursement_type_name = reimbursement_type_name;
	}



	public Double getTypePercentage() {
		return type_percentage;
	}



	public void setTypePercentage(Double type_percentage) {
		this.type_percentage = type_percentage;
	}



	public int getGradingFormat() {
		return grading_format;
	}



	public void setGradingFormat(int grading_format) {
		this.grading_format = grading_format;
	}
	
}
