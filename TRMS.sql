CREATE TABLE EMPLOYEES(
EMPLOYEE_ID NUMBER(10) NOT NULL PRIMARY KEY,
FNAME VARCHAR(30) NOT NULL,
LNAME VARCHAR(30) NOT NULL,
USERNAME VARCHAR(30) UNIQUE NOT NULL,
"PASSWORD" VARCHAR(30) NOT NULL,
DEPARTMENT_ID NUMBER(3),
SUPERVISOR_ID NUMBER (10),
ADDRESS VARCHAR(30) NOT NULL,
CITY varchar(30) not null,
STATE VARCHAR(30) NOT NULL,
ZIPCODE NUMBER(5) NOT NULL,
PHONENUMBER VARCHAR(10) NOT NULL,
EMAIL VARCHAR(30) NOT NULL,
constraint fk_department foreign key (department_id) references department(department_id));


create table REIMBURSMENT(
REIMBURSMENT_ID NUMBER(10) NOT NULL PRIMARY KEY,
EMPLOYEE_ID NUMBER(10) NOT NULL ,
REIMBURSMENT_TYPE_ID NUMBER(10) NOT NULL,
REIMBURSMENT_AMOUNT DECIMAL(6,2) NOT NULL,
APPROVAL_STEP NUMBER(1) NOT NULL,
STATUS NUMBER(1) NOT NULL,
type_id number(3) NOT NULL,
CONSTRAINT FK_EMPLOYEE FOREIGN KEY (EMPLOYEE_ID) REFERENCES 
EMPLOYEES(EMPLOYEE_ID)
ON DELETE CASCADE);


--need to add fk constraint from employees to department using the department key
--i will update this tomorrow
CREATE TABLE DEPARTMENT(
DEPARTMENT_ID NUMBER(2) NOT NULL PRIMARY KEY,
DEPARTMENT_NAME VARCHAR(30) NOT NULL,
DEPARTMENT_HEAD_ID NUMBER(10) NOT NULL,
BENCO_ID NUMBER(10) NOT NULL);



--need to update the reimbursment fk tomorrow
--you won't be able to reference this section yet.
CREATE TABLE REIMBURSMENT_TYPE(
TYPE_ID NUMBER(3) NOT NULL PRIMARY KEY,
TYPE_NAME VARCHAR(30) NOT NULL,
TYPE_PERCENTAGE DECIMAL(2,2) NOT NULL,
GRADING_FORMAT NUMBER(1) NOT NULL,
CONSTRAINT FK_REIMBURSMENT_ID FOREIGN KEY(REIMBURSMENT_ID) 
REFERENCES REIMBURSMENT(REIMBURSMENT_ID)
ON DELETE CASCADE);


CREATE TABLE FILE_ATTACHMENTS(
FILE_ID NUMBER(2) NOT NULL PRIMARY KEY,
FILE_NAME BLOB NOT NULL,
REIMBURSMENT_ID NUMBER(10) NOT NULL,
CONSTRAINT FK_REIMBURSE_ID FOREIGN KEY(REIMBURSMENT_ID)
REFERENCES REIMBURSMENT(REIMBURSMENT_ID)
ON DELETE CASCADE);



--Insert Statements
--If you are having trouble accessing some of the values let me know, i had to add columns that i left out and then edit
--the insert statements to match what I left out. 
INSERT INTO EMPLOYEES VALUES(1,'Kaleb','Martin','Kmart','password', 1, 5 , '1326 tulane dr.' , 'Denton', 'Texas', 76210 , '9032173563', 'kalebamartin05@gmail.com');
INSERT INTO EMPLOYEES VALUES(2,'Derek','Moore','DMoore','password', 2, 3 , '1234 pennsylvania ave.' ,'Mertyl Beach', 'South Carolina', 55555, '5555555555' , 'DMoore@gmail.com'  );
INSERT INTO EMPLOYEES VALUES(3,'John','wizniewski','wizkid','password', 2 ,7,'1234 sleepyHollow cr.' , 'Akron','Ohio',55555, '5555555555','jwiznew@gmail.com');

--All of the reimbursments are for derek moore the 2nd employee
--I will create a reference table of all of the Reimbursment_type_id's tomorrow
insert into reimbursment values(1,2,1,250.00,1,1);
insert into reimbursment values(2,2,2,200.00,1,1);
insert into reimbursment values(3,2,3,100.00,2,2);

--there are only two departments so far. 
--let me know how many more you need to test with.
insert into department values(2,'I.T.',7,100);
insert into department values(1,'Sales',9,100);

--reimbursment type percentages are all correct except the certification one
--i set the type to decimal(2,2) forgetting about the class that is
--100% reimbursable. 
insert into REIMBURSMENT_TYPE VALUES(1,'university course',.80,1);
insert into REIMBURSMENT_TYPE VALUES(2,'seminar',.60,4);
insert into REIMBURSMENT_TYPE VALUES(3,'certification prep classes',.75,2);
insert into REIMBURSMENT_TYPE VALUES(4,'certification',.99,3);
insert into REIMBURSMENT_TYPE VALUES(5,'technical training',.90,3);
insert into REIMBURSMENT_TYPE VALUES(6,'other',.30,4);


--im tired so im going to go to sleep and finish the insert statements tomorrow for the files table. 

--i need to add this constraint tomorrow to the reimbursment_type
alter table reimbursment_type add constraint fk_type_id foreign key(type_id) references reimbursment(type_id);

--if anything doesn't work just let me know or if you want to change it and send it back. just checkout the sql branch and 
--add .sql file with a different name. 




