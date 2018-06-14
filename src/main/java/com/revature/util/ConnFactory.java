package com.revature.util;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class ConnFactory {
	
	//private Properties prop = null;
	
	private static ConnFactory cf = new ConnFactory();
	
	private ConnFactory() {
		super();
	}
	
	public static synchronized ConnFactory getInstance() {
		if(cf == null) {
			cf = new ConnFactory();
		}
		return cf;
	}
	
	public Connection getConnection(String[] arr) {
        Connection conn = null;
        //getConnection(url, username, password)
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            
             conn = DriverManager.getConnection(arr[0],
                    arr[1],
                    arr[2]);

        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return conn;
    }
	
/*	public Connection getConnection() {
		Connection conn = null;
		//InputStream is = null;
		//Properties prop = null;
		try {
			Properties prop = new Properties();
			//prop.load(new FileReader("database.properties"));
			//prop.load(getClass().getResourceAsStream("TRMS/database.properties"));
			//this.prop = new Properties();
			//is = this.getClass().getResourceAsStream("/TRMS/database.properties");
			//prop.load(is);
			
			try {
				Class.forName(prop.getProperty("driver"));
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			conn = DriverManager.getConnection(prop.getProperty("url"), prop.getProperty("usr"), prop.getProperty("password"));
			
			//Class.forName("oracle.jdbc.driver.OracleDriver");
			/*conn = DriverManager.getConnection("jdbc:oracle:thin:@my-aws-db.cnrm17iwv7eh.us-east-2.rds.amazonaws.com:1521:ORCL", 
					"ddmoore1221", "ma5t3rPass?");
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}*/

}