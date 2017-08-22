package com.exciteholidays.scm.repository;

import redis.clients.jedis.Jedis;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.*;

/**
 * Created by jamlong on 8/21/2017 AD.
 */
public class test {
    public static void main(String[] args) {
        //Connecting to Redis server on localhost
        //Connecting to Redis server on localhost

        try {

            Connection conn = DriverManager.getConnection(
                    "jdbc:postgresql://10.0.16.67:4321/backoffice","excitedev", "ExciteDev123");


            Jedis jedis = new Jedis("localhost");
            System.out.println("Connection to server sucessfully");
            String key = "test";

            Statement stmt = conn.createStatement();
            Integer offset = 0;
            for(Integer i=0;i<1200;i++){


                ResultSet rs = stmt.executeQuery("select giata_id,supplier_id,external_id FROM giata_supplier_view ORDER BY id ASC offset "+offset+" limit 2000 ;");
                String[] values = new String[2000];
                int j =0 ;
                while (rs.next()) {
                    Integer giataId = rs.getInt("giata_id");
                    Integer supplierId = rs.getInt("supplier_id");
                    String externalId = rs.getString("external_id");
                    values[j] = "{\"giata_id\":"+giataId+",\"supplier_id\":"+supplierId+",\"external_id\":\""+externalId+"\"}";
                    j++;
                }
                jedis.sadd(key, values);
                offset = offset+2000;
            }

        }catch (Exception ex){
            System.out.println(ex.getMessage());
        }




// //We could add more than one value in one calling
//        Map<Double, String> scoreMembers = new HashMap<Double, String>();
//        scoreMembers.put(90d, "Python");
//        scoreMembers.put(80d, "Javascript");
//
//        //We could get the score for a member
//        System.out.println("Number of Java users:" + jedis.zscore(key, "Java"));
//
//        //We could get the number of elements on the set
//        System.out.println("Number of elements:" + jedis.zcard(key));//ZCARD
    }
}
