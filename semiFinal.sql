--CREATE TABLE DEPARTMENT
CREATE TABLE DEPARTMENT(
DEPARTMENT_NAME VARCHAR(30) NOT NULL PRIMARY KEY,
DEPARTMENT_HEAD_ID NUMBER(10) NOT NULL,
BENCO_ID NUMBER(10) NOT NULL);


--CREATE TABLE REIMBURSMENT TYPE
CREATE TABLE REIMBURSMENT_TYPE(
REIMBURSMENT_TYPE_NAME VARCHAR(30) NOT NULL PRIMARY KEY,
TYPE_PERCENTAGE DECIMAL(3,2) NOT NULL,
GRADING_FORMAT VARCHAR(30) NOT NULL);



--CREATE EMPLOYEES TABLE
CREATE TABLE EMPLOYEES(
EMPLOYEE_ID NUMBER(10) NOT NULL PRIMARY KEY,
FNAME VARCHAR(30) NOT NULL,
LNAME VARCHAR(30) NOT NULL,
USERNAME VARCHAR(30) UNIQUE NOT NULL,
"PASSWORD" VARCHAR(30) NOT NULL,
DEPARTMENT_NAME VARCHAR(30),
SUPERVISOR_ID NUMBER (10),
ADDRESS VARCHAR(30) NOT NULL,
CITY varchar(30) not null,
STATE VARCHAR(30) NOT NULL,
ZIPCODE NUMBER(5) NOT NULL,
PHONENUMBER VARCHAR(10) NOT NULL,
EMAIL VARCHAR(100) NOT NULL,
IS_SUPERVISOR VARCHAR(3), 
IS_DEPARTMENT_HEAD VARCHAR(3),
IS_BENCO VARCHAR(3),
CONSTRAINT FK_DEPARTMENT FOREIGN KEY (DEPARTMENT_NAME) REFERENCES DEPARTMENT(DEPARTMENT_NAME));



--CREATE REIMBURSMENT TABLES
create table REIMBURSMENT(
REIMBURSMENT_ID NUMBER(10) NOT NULL PRIMARY KEY,
EMPLOYEE_ID NUMBER(10) NOT NULL ,
REIMBURSMENT_TYPE_NAME VARCHAR(30) NOT NULL,
REIMBURSMENT_AMOUNT DECIMAL(6,2) NOT NULL,
APPROVAL_STEP VARCHAR(30) NOT NULL,
STATUS VARCHAR(20) NOT NULL,
GRADE_SUBMITTED VARCHAR(3) NOT NULL,
PREAPPROVED VARCHAR(3) NOT NULL,
EVENT_START_DATE DATE NOT NULL,
EVENT_END_DATE DATE NOT NULL,
EVENT_LOCATION VARCHAR(30) NOT NULL,
JUSTIFICATION VARCHAR(100) NOT NULL,
DESCRIPTION VARCHAR(100) NOT NULL,
MISSED_WORK NUMBER(3) NOT NULL,
CONSTRAINT MISSED_WORK_CHECK CHECK (MISSED_WORK > 0),
CONSTRAINT FK_REIMBURSMENT_TYPE FOREIGN KEY(REIMBURSMENT_TYPE_NAME) REFERENCES REIMBURSMENT_TYPE(REIMBURSMENT_TYPE_NAME),
CONSTRAINT FK_EMPLOYEES FOREIGN KEY(EMPLOYEE_ID) REFERENCES EMPLOYEES(EMPLOYEE_ID) ON DELETE CASCADE);



--TABLE FOR FILE ATTACHMENTS
CREATE TABLE FILE_ATTACHMENTS(
FILE_ID NUMBER(2) NOT NULL PRIMARY KEY,
FILE_NAME BLOB NOT NULL,
REIMBURSMENT_ID NUMBER(10) NOT NULL,
CONSTRAINT FK_REIMBURSE_ID FOREIGN KEY(REIMBURSMENT_ID)
REFERENCES REIMBURSMENT(REIMBURSMENT_ID)
ON DELETE CASCADE);



--ADDITIONAL INFO TABLE
CREATE TABLE ADDITIONAL_INFO(
INFO VARCHAR(300) NOT NULL,
REIMBURSMENT_ID NUMBER(10) NOT NULL,
CONSTRAINT FK_INFO_REIMBURSMENT FOREIGN KEY(REIMBURSMENT_ID)
REFERENCES REIMBURSMENT(REIMBURSMENT_ID) ON DELETE CASCADE);









-- SEQUENCES FOR THE FILES
CREATE SEQUENCE FILE_SEQ
START WITH 1;


CREATE SEQUENCE REIM_SEQ_ID
START WITH 10;







--initial table population
INSERT INTO DEPARTMENT VALUES( 'I.T.', 9 , 10);
INSERT INTO DEPARTMENT VALUES( 'Sales', 20, 10);
INSERT INTO DEPARTMENT VALUES( 'H.R.', 25, 10);


INSERT INTO EMPLOYEES VALUES( 1, 'Kaleb' , 'Martin' , 'kmartisback05' , 'password', 'I.T.', 5, '1326 Tulane dr.',
                            'Denton', 'Texas', 75135, '9032173563', 'kmart@gmail.com', 'no', 'no', 'no');
INSERT INTO EMPLOYEES VALUES( 5, 'Derek' , 'Moore', 'Dmoore2', 'password', 'I.T.', 9, '1500 Sesame st.',
                            'honolulu', 'Hawaii',88983,'1234567890','dmoore2@gmail.com','yes', 'no', 'no');
INSERT INTO EMPLOYEES VALUES( 9, 'John' , 'Wiznewski', 'wizkid','password', 'I.T.',10,'1222 Sleepy Hollow ct.',
                            'Sleepy Hollow', 'Ohio', 38893, '2345678901','wizkid102@gmail.com','no','yes','no');
INSERT INTO EMPLOYEES VALUES( 10, 'Eduardo', 'Garcia', 'uncleEddy','password', 'I.T.',11,'1488 Candy Mount rd.',
                            'chihuahua','Mexico', 84993, '5764893276', 'eduardoTheGreat@gmail.com','no','no','yes');


INSERT INTO REIMBURSMENT_TYPE VALUES('University Course', .80, 'LetterGrade');
INSERT INTO REIMBURSMENT_TYPE VALUES('Seminar', .60, 'Presentation');
INSERT INTO REIMBURSMENT_TYPE VALUES('Certification Prep', .75, 'Percentage');
INSERT INTO REIMBURSMENT_TYPE VALUES('Certification', 1, 'Percentage');
INSERT INTO REIMBURSMENT_TYPE VALUES('Technical Training', .90, 'Percentage');
INSERT INTO REIMBURSMENT_TYPE VALUES('Other', .30, 'Presentation');


INSERT INTO REIMBURSMENT VALUES(1,1,'University Course',250,'Supervisor','Pending','no','no',TO_DATE('2018-06-27' ,'yyyy-mm-dd') ,TO_DATE('2018-08-01', 'yyyy-mm-dd' ),'Tampa, Fl',
                                'to get my masters degrees', '12 week long course on neural networks',40);
INSERT INTO REIMBURSMENT VALUES(2,5,'Seminar', 100, 'Department Head', 'Pending', 'yes', 'no', to_date('2018-08-24', 'yyyy-mm-dd'), TO_DATE('2018-08-29','yyyy-mm-dd') ,'USF',
                                'to learn a about javascript', 'a 2 day seminar to learn about the new functionality of javascript', 10); 








--PROCEDURES--


--procedure to get all from 
--INSERT INTO THE REIMBURSMENT TABLE 
create or replace procedure INTO_REIMBURSMENT(--REIMBURSMENT_ID
EMP_ID_IN IN NUMBER, REIMBURSMENT_TYPE_NAME_IN IN NUMBER, 
REIMBURSMENT_AMOUNT_IN IN NUMBER,APPROVAL_STEP_IN IN VARCHAR,
STATUS_IN IN VARCHAR, SUBMITTED_IN IN VARCHAR , PREAPPROVED IN VARCHAR, 
EVENT_START_DATE_IN IN DATE, EVENT_END_DATE_IN IN DATE,
LOCATION_IN IN VARCHAR,JUSTIFICATION_IN IN VARCHAR,DESCRIPTION_IN in varchar, MISSED_WORK_IN IN NUMBER)
as 
begin
    INSERT INTO REIMBURSMENT VALUES(REIM_SEQ_ID.NEXTVAL ,EMP_ID_IN, REIMBURSMENT_TYPE_NAME_IN,
    REIMBURSMENT_AMOUNT_IN, APPROVAL_STEP_IN, STATUS_IN, SUBMITTED_IN, PREAPPROVED, EVENT_START_DATE_IN, EVENT_END_DATE_IN,
    LOCATION_IN, JUSTIFICATION_IN, DESCRIPTION_IN , MISSED_WORK_IN);
end;
/


--CALLED WHEN THE STATUS OF THE REIMBURSMENT IS UPDATED 
CREATE OR REPLACE PROCEDURE UPDATE_STATUS(REIMBURSMENT_ID_IN IN NUMBER,
STATUS_IN IN VARCHAR)
AS
BEGIN
    UPDATE REIMBURSMENT SET STATUS = STATUS_IN WHERE  REIMBURSMENT_ID = REIMBURSMENT_ID_IN;
END;
/

--PROCEDURE TO UPDATE THE STEP LOCATION.
CREATE OR REPLACE PROCEDURE UPDATE_STEP(REIMBURSMENT_ID_IN IN NUMBER,
APPROVAL_STEP_IN IN VARCHAR)
AS 
BEGIN
    UPDATE REIMBURSMENT SET APPROVAL_STEP = APPROVAL_STEP_IN WHERE REIMBURSMENT_ID = REIMBURSMENT_ID_IN;
END;
/


-- CALLED WHEN ONE OF THE 5 EDITABLE FIELDS ARE EDITED.
CREATE OR REPLACE PROCEDURE EMPLOYEE_UPDATE_REIMBURSMENTS(REIMBURSMENT_ID_IN IN NUMBER , EVENT_START_DATE_IN IN DATE,
EVENT_END_DATE_IN IN DATE , LOCATION_IN IN VARCHAR, DESCRIPTION_IN IN VARCHAR, JUSTIFICATION_IN IN VARCHAR, MISSED_WORK_IN IN NUMBER)
AS
BEGIN
    UPDATE REIMBURSMENT SET EVENT_START_DATE = EVENT_START_DATE_IN, EVENT_END_DATE = EVENT_END_DATE_IN, EVENT_LOCATION = LOCATION_IN, DESCRIPTION = DESCRIPTION_IN,
    JUSTIFICATION = JUSTIFICATION_IN , MISSED_WORK = MISSED_WORK_IN WHERE REIMBURSMENT_ID = REIMBURSMENT_ID_IN;
END;
/

--CALLED WHEN UPDATING THE REIMBURSMENT AMOUNT 
CREATE OR REPLACE PROCEDURE UPDATE_REIMBURSMENT_AMOUNT(REIMBURSMENT_ID_IN IN NUMBER, REIMBURSMENT_AMOUNT_IN IN NUMBER)
AS
BEGIN
    UPDATE REIMBURSMENT SET REIMBURSMENT_AMOUNT = REIMBURSMENT_AMOUNT_IN WHERE REIMBURSMENT_ID = REIMBURSMENT_AMOUNT_IN;
END;
/


---INSERT INTO THE FILES TABLE 
create or replace procedure INTO_FILES( FILE_NAME_IN IN BLOB, REIMBURSMENT_ID_IN IN NUMBER)
AS 
BEGIN
    INSERT INTO FILE_ATTACHMENTS VALUES(FILE_SEQ.NEXTVAL, FILE_NAME_IN, REIMBURSMENT_ID_IN);
END;
/


--INSERT INTO THE THE ADDITIONAL INFO TABLE
CREATE OR REPLACE PROCEDURE INTO_ADDITIONAL_INFO(INFO_IN IN VARCHAR, REIMBURSMENT_ID_IN IN NUMBER)
AS 
BEGIN
    INSERT INTO ADDITIONAL_INFO VALUES(INFO_IN, REIMBURSMENT_ID_IN);
    
END;
/









