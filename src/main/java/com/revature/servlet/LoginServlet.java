package com.revature.servlet;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import com.google.gson.Gson;
import com.revature.DAOimpl.EmployeesDAOimpl;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.MultivaluedMap;

public class LoginServlet extends HttpServlet {
	
	
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("Inside doGet of login servlet");
		RequestDispatcher rd = request.getRequestDispatcher("login.html");
		rd.forward(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String[] arr = getServletContext().getInitParameter("dbInfo").split(",");
		System.out.println("Inside doPost of login servlet");
		
		
	
		/*String username = request.getParameter("username");
		String password = request.getParameter("password");
		Service service = new Service(arr);
		int id = service.checkLoginCredentials(username, password);
		System.out.println(id);
		response.addHeader("employee_id", Integer.toString(id));*/
	}

}
