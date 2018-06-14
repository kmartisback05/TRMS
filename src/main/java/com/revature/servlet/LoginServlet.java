package com.revature.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import com.google.gson.Gson;
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
		System.out.println("Inside doPost of login servlet");
		response.sendRedirect("home");
		/*Enumeration<String> paramNames = request.getParameterNames();
		List<String> paramNamesList = new ArrayList<String>();
		List<String> paramValuesList = new ArrayList<String>();
		Gson gson = new Gson();
		
		while(paramNames.hasMoreElements()) {
			String paramName = paramNames.nextElement();
			paramNamesList.add(paramName);
		}
		
		String str = paramNamesList.get(0);
		System.out.println(str);
		
		String formatStr = str.replaceAll("[^a-zA-Z0-9:,]","");
		System.out.println(formatStr);

		String [] pairs = formatStr.split(",");
		
		HashMap<String, String> map = new HashMap<String, String>();
		for(int i=0; i<pairs.length; i++) {
			String [] keyVals = pairs[i].split(":");
			map.put(keyVals[0], keyVals[1]);
		}
		
		String username = map.get("username");
		String password = map.get("password");*/
		
		//System.out.println(username);
		//System.out.println(password);
		
		
	}

}
